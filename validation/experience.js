const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Validate title
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  // Validate company
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  // Validate From
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
