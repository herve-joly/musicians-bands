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
      instruments: "Bass",
    });
    expect(testMusician.name).toBe("Musi Cian");
  });
  test("deleting an instance", async () => {
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    const testBand2 = await Band.create({
      name: "Nicer Band",
      genre: "Rock",
      showCount: 4,
    });
    await Band.destroy({ where: { name: "Nice Band" } });
    expect(await Band.findAll()).toHaveLength(1);
  });
  test("test update", async () => {
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    await testBand.update(
      { name: "New Band" },
      { where: { name: "Nice Band" } }
    );
    expect(testBand.name).toBe("New Band");
  });
  test("testing association", async () => {
    const testMusician = await Musician.create({
      name: "Musi Cian",
      instruments: "Bass",
    });
    const testMusician2 = await Musician.create({
      name: "Music Ian",
      instruments: "Drums",
    });
    const testMusician3 = await Musician.create({
      name: "Mus Ician",
      instruments: "Guitar",
    });
    const testBand = await Band.create({
      name: "Nice Band",
      genre: "Rock",
      showCount: 3,
    });
    await testBand.addMusician(testMusician);
    await testBand.addMusician(testMusician2);
    await testBand.addMusician(testMusician3);
    const Musicians = await testBand.getMusicians();
    const bands = await Band.findAll();
    expect(Musicians.length).toBe(bands.length);
  });
});
