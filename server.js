const express = require('express');

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
  console.log(`Server is running on port ${config.express.port}`)
);
