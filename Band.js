const { Sequelize, sequelize } = require("./db");

// TODO - define the Band model
let Band = sequalize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});
module.exports = {
  Band,
};
