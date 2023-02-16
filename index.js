const { Band } = require("./Band");
const { Musician } = require("./Musician");
const { Song } = require("./Song");

Band.hasMany(Musician);
Musician.belongsTo(Band);
Song.belongsToMany(Band, { through: "connection" });
Band.belongsToMany(Song, { through: "connection" });
module.exports = {
  Band,
  Musician,
  Song,
};
