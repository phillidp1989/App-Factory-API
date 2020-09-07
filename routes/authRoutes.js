const router = require('express').Router();
const passport = require('passport');

// Environment variables
require('dotenv').config();

// Initiates Github Oauth
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Github redirect route
router.get(
  '/github/redirect',
  passport.authenticate('github', { failureRedirect: '/', successRedirect: 'https://app-factory-e6ff0.web.app' }, (req, res) => {
    req.session.user = req.user;
  })
);

// Initiates Google Oauth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google redirect route
router.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/', successRedirect: 'https://app-factory-e6ff0.web.app' }, (req, res) => {
    req.session.user = req.user;
  }));

// Initiates Facebook Oauth
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook redirect route
router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/', successRedirect: 'https://app-factory-e6ff0.web.app' }, (req, res) => {
    req.session.user = req.user;
  })

);

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).redirect('https://app-factory-e6ff0.web.app');
});

module.exports = router;
