import { OptionItem, TravelDataType } from "./DataTypes";

export const generateRandomNumber = (): number => {
  return Math.random() * 232323232;
};

export const interestsArray: OptionItem[] = [
  { value: "Adventure Travel", id: generateRandomNumber() },
  { value: "Outdoor Activities", id: generateRandomNumber() },
  { value: "Hiking", id: generateRandomNumber() },
  { value: "Camping", id: generateRandomNumber() },
  { value: "Backpacking", id: generateRandomNumber() },
  { value: "Rock Climbing", id: generateRandomNumber() },
  { value: "Kayaking", id: generateRandomNumber() },
  { value: "Mountain Biking", id: generateRandomNumber() },
  { value: "Skiing/Snowboarding", id: generateRandomNumber() },
  { value: "Wildlife Viewing", id: generateRandomNumber() },
  { value: "Nature Photography", id: generateRandomNumber() },
  { value: "Surfing", id: generateRandomNumber() },
  { value: "Scuba Diving", id: generateRandomNumber() },
  { value: "Whitewater Rafting", id: generateRandomNumber() },
  { value: "Safari", id: generateRandomNumber() },
  { value: "Ecotourism", id: generateRandomNumber() },
  { value: "Exploring National Parks", id: generateRandomNumber() },
];

export const travellerOptions: OptionItem[] = [
  { value: "1 Traveller", id: 1 },
  { value: "2 Travellers", id: 2 },
  { value: "3 Travellers", id: 3 },
  { value: "4 Travellers", id: 4 },
  { value: "5 Travellers", id: 5 },
  { value: "6 Travellers", id: 9 },
  { value: "6+ Travellers", id: 6 },
];
export const budgetOptions: OptionItem[] = [
  { value: "$4000", id: 4000 },
  { value: "$5000", id: 5000 },
  { value: "$6000", id: 6000 },
  { value: "$7000", id: 7000 },
  { value: "$8000", id: 8000 },
  { value: "$9000", id: 9000 },
  { value: "$10000", id: 10000 },
];
export const MonthData: OptionItem[] = [
  { value: "May 2024", id: generateRandomNumber() },
  { value: "June 2024", id: generateRandomNumber() },
  { value: "July 2024", id: generateRandomNumber() },
  { value: "August 2024", id: generateRandomNumber() },
  { value: "September 2024", id: generateRandomNumber() },
  { value: "October 2024", id: generateRandomNumber() },
  { value: "November 2024", id: generateRandomNumber() },
  { value: "December 2024", id: generateRandomNumber() },
];

export const validateFormData = (formData: TravelDataType) => {
  if (!formData.no_of_travellers || formData.no_of_travellers.trim() === "") {
    alert("Please select number of travellers");
    return false;
  }
  if (!formData.country || formData.country.trim() === "") {
    alert("Please enter a country");
    return false;
  }
  if (!formData.interest || formData.interest.trim() === "") {
    alert("Please enter an interest");
    return false;
  }
  if (!formData.budget || formData.budget.trim() === "") {
    alert("Please enter a budget");
    return false;
  }

  if (!formData.name || formData.name.trim() === "") {
    alert("Please enter a name");
    return false;
  }
  if (!formData.email || formData.email.trim() === "") {
    alert("Please enter a email");
    return false;
  }
  if (!formData.phone_number || formData.phone_number.trim() === "") {
    alert("Please enter a Phone Number");
    return false;
  }
  if (!formData.travel_month || formData.travel_month.trim() === "") {
    alert("Please enter a Travel Month");
    return false;
  }
  return true;
};

export const API_BASE_URL = `http://localhost:8080/api/v1`;
