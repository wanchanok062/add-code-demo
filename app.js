require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize} = require("./src/models");
const generateCodeRouter = require('./src/api/v1/generate-code/generate-code-router');

app.use(bodyParser.json());
app.use('/api/v1/generate-code', generateCodeRouter);

const PORT = process.env.PORT || 3000;
sequelize
  .sync()
  .then(async () => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;
