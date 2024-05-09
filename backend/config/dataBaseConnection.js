const mongoose = require("mongoose");
const envVars = require("./envVar");

const dataBaseConnection = mongoose.connect(envVars.MONGO_URl);
module.exports = dataBaseConnection;
