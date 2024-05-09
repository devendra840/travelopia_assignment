const dotenv = require("dotenv");
const path = require("path");

const envVars = dotenv.config({
  path: path.resolve(__dirname, "../.env"),
}).parsed;

module.exports = {
  PORT: envVars.PORT,
  MONGO_URl: envVars.MONGO_DB_URL,
};
