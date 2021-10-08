require("dotenv").config();

const db_config = {
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: "+09:00",
};

const development = {
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: "+09:00",
};

const production = {
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: "+09:00",
};

const test = {
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: "+09:00",
};

module.exports = {
  db_config,
  development,
  production,
  test,
};
