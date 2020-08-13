require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",//process.env.DB_USER,
    "password": "root",//process.env.DB_PASS,
    "database": "house_of_games",//process.env.DB_NAME,
    "port":"8889",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
