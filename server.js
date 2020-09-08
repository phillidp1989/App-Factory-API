const express = require('express');
const passport = require('passport');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const config = require('./config/config');
const connectDB = require('./config/db');

// OAuth passport strategies
require('./config/githubPassport');
require('./config/googlePassport');
require('./config/facebookPassport');

// Environment variables
require('dotenv').config();

// Initiate express
const app = express();

// Initialize Morgan logger
app.use(logger('dev'));

// Cookie Session setup to ensure auth persists for specified amount of time
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [config.cookie.key]
}));

// Middleware initialisation to enable data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Initialize passport and sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Connect to DB
connectDB();

// Start the server
app.listen(config.express.port, () =>
  console.log(`Server is running on port ${config.express.port}`)
);
