const { Sequelize, sequelize, DataTypes } = require("./db");

// TODO - define the Musician model
let Musician = sequalize.define("Musician", {
  name: DataTypes.STRING,
  instruments: DataTypes.STRING,
});
module.exports = {
  Musician,
};
