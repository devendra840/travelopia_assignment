const TravellerModel = require("../models/traveller.model.js");
const httpStatus = require("http-status");
const createNewTraveller = async (req, res) => {
  try {
    let newTraveller = TravellerModel(req.body);
    await newTraveller.save();
    res
      .status(httpStatus.CREATED)
      .json({ message: "Traveller Created Success" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const readAllTravellers = async (req, res) => {
  try {
    let travellers = await TravellerModel.find({});
    res
      .status(httpStatus.OK)
      .json({ data: travellers, message: "Data Fetched Success" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = {
  createNewTraveller,
  readAllTravellers,
};
