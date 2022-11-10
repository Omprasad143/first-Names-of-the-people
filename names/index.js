const names = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (personName) => {
  return getFirstNames(personName);
};

module.exports = getPeopleInCity;
