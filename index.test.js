const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({ name: "Nice Band", genre: "Rock" });
    expect(testBand.name).toBe("Nice Band");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Musi Cian",
      instrument: "Bass",
    });
    expect(testMusician.name).toBe("Musi Cian");
  });
});
