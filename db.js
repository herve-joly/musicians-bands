const path = require("path");
const { Sequelize, Model } = require("sequelize");

// TODO - create the new sequelize connection
const sequalize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  sequelize,
  Sequelize,
};
