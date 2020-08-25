const passport = require('passport');
const User = require('../models/User');
const GitHubStrategy = require('passport-github2').Strategy;

// Environment variables
require('dotenv').config();

// Serialize user saved the providerId to the session
passport.serializeUser((user, done) => {
  done(null, user.providerId);
});

// Deserialize user retrieves the provider id from the session to fine user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ providerId: id });
    done(null, user);
  } catch (err) {
    console.log('ERROR - gitHubAuth.js - deserializeuser', err);
  }
});

// Instantiate GitHubStrategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/redirect'
    },
    // Callback function checks database and creates user if providerID doesn't already exist
    async (accessToken, refreshToken, profile, done) => {
      try {
        const result = await User.findOne({ providerId: profile.id });
        if (result) {
          done(null, result);
        } else {
          const user = await new User({
            provider: 'GitHub',
            providerId: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            avatar: profile.photos[0].value,
            isDeveloper: true
          }).save();
          done(null, user);
        }
      } catch (err) {
        console.log('ERROR - gitHubAuth.js - GitHubStrategy', err);
      }
    }
  )
);
