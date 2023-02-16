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
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    expect(testBand.name).toBe("Nice Band");
    expect(testBand.showCount).toBe(3);
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Musi Cian",
      instrument: "Bass",
    });
    expect(testMusician.name).toBe("Musi Cian");
  });
  test("deleting an instance", async () => {
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    const destroyBand = await testBand.destroy();
    expect().toBe();
  });
  test("test update", async () => {
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    const testBand2 = await testBand.update(
      { name: "New Band" },
      { where: { name: "Nice Band" } }
    );
    expect(testBand.name).toBe("New Band");
  });
});
