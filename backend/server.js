const express = require('express');

const config = require('./config/config');

// Initiate express
const app = express();

// Middleware initialisation to enable data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(config.express.port, () =>
  console.log(`App is running on port ${config.express.port}`)
);
