const passport = require('passport');
const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Environment variables
require('dotenv').config();

// Serialize user saved the providerId to the session
passport.serializeUser((user, done) => {
  done(null, user.providerId);
});

// Deserialize user retrieves the provider id from the session to find user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ providerId: id });
    done(null, user);
  } catch (err) {
    console.error('ERROR - googleAuth.js - deserializeuser', err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const result = await User.findOne({ providerId: profile.id });
        if (result) {
          done(null, result);
        } else {
          const user = await new User({
            provider: 'Google',
            providerId: profile.id,
            username: profile.displayName + profile.id,
            displayName: profile.displayName,
            avatar: profile.photos[0].value
          }).save();
          done(null, user);
        }
      } catch (err) {
        console.log('ERROR - googleAuth.js - GoogleStrategy', err);
      }
    }
  )
);
