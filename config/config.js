require('dotenv').config();

module.exports = {
  db: {
    uri: process.env.MONGO_URI
  },
  express: {
    port: process.env.PORT || 5000
  },
  cookie: {
    key: process.env.SECRET_KEY
  },
  route: {
    development: 'http://localhost:3000',
    production: 'https://app-factory-2020.herokuapp.com/'
  }
};
