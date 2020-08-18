const mongoose = require('mongoose');
const { db } = require('./config');

const connectDB = async () => {
  try {
    await mongoose.connect(db.uri || 'mongodb://localhost/app_factory', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Connected to DB'.magenta);
    return true;
  } catch (err) {
    console.error('ERROR - db.js - connectDB: ', err);
    process.exit(1);
  }
};

module.exports = connectDB;
