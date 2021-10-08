const express = require("express");
const db = require("./models");
const layout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { stream, logger } = require("./config/winston");

require("dotenv").config();

class App {
  constructor() {
    const morganFormat =
      process.env.NODE_ENV == "development" ? "dev" : "combined";

    this.app = express();
    this.setVieEngine();
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static("./public"));

    this.dbConnection();
    this.app.use(morgan(morganFormat, { stream }));
    this.app.use(require("./routes"));
  }

  setVieEngine() {
    this.app.set("./views");
    this.app.set("view engine", "ejs");
    this.app.use(layout);
    this.app.set("layout", "layout/layout");
    this.app.set("layout extractScripts", true);
    this.app.set("layout extractStyles", true);
  }

  dbConnection() {
    // DB authentication
    db.sequelize
      .authenticate()
      .then(() => {
        logger.info("Connection has been established successfully.");
        return db.sequelize.sync();
      })
      .then(() => {
        logger.info("DB Sync complete.");
      })
      .catch((err) => {
        logger.error("Unable to connect to the database:", err);
      });
  }
}

module.exports = new App().app;
