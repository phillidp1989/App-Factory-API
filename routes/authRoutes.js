const router = require('express').Router();
const passport = require('passport');
const config = require('../config/config');

// Environment variables
require('dotenv').config();

// Frontend Origin
let originUrl;
if (process.env.NODE_ENV === 'development') {
  originUrl = config.route.development;
} else {
  originUrl = config.route.production;
}

// Initiates Github Oauth
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Github redirect route
router.get(
  '/github/redirect',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.status(200).redirect(config.route.development);
  }
);

// Initiates Google Oauth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google redirect route
router.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.status(200).redirect(config.route.development);
  }
);

// Initiates Facebook Oauth
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook redirect route
router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.status(200).redirect(config.route.development);
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).redirect(config.route.development);
});

module.exports = router;
