require("dotenv").config();

let config = {};

if (process.env.NODE_ENV === "production") {
  config = {
    DB_HOST: process.env.PROD_DB_HOST,
    DB_USER: process.env.PROD_DB_USER,
    DB_PASSWORD: process.env.PROD_DB_PASSWORD,
    DB_NAME: process.env.PROD_DB_NAME,
    PORT: process.env.PROD_PLEDGE_PORT
  };
} else if (process.env.NODE_ENV === "test") {
  config = {
    DB_HOST: process.env.DEV_DB_HOST,
    DB_USER: process.env.DEV_DB_USER,
    DB_PASSWORD: process.env.DEV_DB_PASSWORD,
    DB_NAME: process.env.DEV_DB_NAME,
    PORT: process.env.DEV_PLEDGE_PORT
  };
} else {
  config = {
    DB_HOST: process.env.DEV_DB_HOST,
    DB_USER: process.env.DEV_DB_USER,
    DB_PASSWORD: process.env.DEV_DB_PASSWORD,
    DB_NAME: process.env.DEV_DB_NAME,
    PORT: process.env.DEV_PLEDGE_PORT
  };
}

module.exports = config;
