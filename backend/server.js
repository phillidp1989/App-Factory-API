const express = require('express');
const colors = require('colors');

const connectDB = require('./config/db');
const config = require('./config/config');

// Initiate express
const app = express();

// Middleware initialisation to enable data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectDB();

// Start the server
app.listen(config.express.port, () =>
  console.log(`App is running on port ${config.express.port}`.green)
);
