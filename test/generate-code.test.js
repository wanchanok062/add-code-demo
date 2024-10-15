const request = require("supertest");
const app = require("../app");
const testCases = require("./data/testData");
const { sequelize } = require("../src/models");

beforeAll(async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

afterAll(async () => {
  try {
    await sequelize.close();
  } catch (error) {
    console.error("Error closing the database connection:", error);
  }
});

describe("POST /api/v1/generate-code", () => {
  test.each(testCases)(
    "$id: ทดสอบการสร้าง code",
    async ({ input, expectedOutput }) => {
      const response = await request(app)
        .post("/api/v1/generate-code")
        .send(input)
        .expect(200);
      expect(response.body).toMatchObject(expectedOutput);
    }
  );
});
