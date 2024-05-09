const express = require("express");
const envVars = require("./config/envVar");
const cors = require("cors");
const dataBaseConnection = require("./config/dataBaseConnection");
const travellerRouter = require("./routes/travller.route");
const httpStatus = require("http-status");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/traveller", travellerRouter);

app.listen(envVars.PORT, async (req, res) => {
  try {
    console.log("Server started", envVars.PORT);
    await dataBaseConnection;
    console.log("DataBase is Connected");
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
});
