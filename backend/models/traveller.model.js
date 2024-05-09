const mongoose = require("mongoose");

const travellerModelSchema = mongoose.Schema({
  no_of_travellers: { required: true, type: String },
  country: { required: true, type: String },
  interest: { required: true, type: String },
  budget: { required: true, type: String },
  name: { required: true, type: String },
  email: { required: true, type: String },
  phone_number: { required: true, type: String },
  travel_month: { required: true, type: String },
});

const TravellerModel = mongoose.model("traveller", travellerModelSchema);

module.exports = TravellerModel;
