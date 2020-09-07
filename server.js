const express = require('express');
const passport = require('passport');
const logger = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');

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

app.use(cors({
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

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

// Initialize passport and sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Connect to DB
connectDB();

// Start the server
app.listen(config.express.port, () =>
  console.log(`Server is running on port ${config.express.port}`)
);
