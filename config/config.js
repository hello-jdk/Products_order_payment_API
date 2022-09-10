require("dotenv").config();

/**
 * SERVER PORT
 */
const PORT = process.env.PORT;

/**
 * DB
 */
const DB = {
  HOST: process.env.DB_HOST,
  DATABASE: process.env.DB_DATABASE,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DIALECT: "mysql",
};

module.exports = { PORT, DB };
