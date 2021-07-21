const validateForm = values => {
  /**
   * We first set an empty errors object, then run through our conditional checks to make sure all fields are authorized.
   * If any conditional check is true, the object will be updated for that field value with the corresponding error message.
   * We will use this errors object to check for and show the errors on the form component.
   */

  let errors = {};

  // is the name missing?
  if (!values.fullName.trim()) {
    errors.fullName = "Name is missing";
  }

  // is the email missing?
  if (!values.email.trim()) {
    errors.email = "Email is missing";
    // is the email in the correct format?
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = "Wrong format";
  }

  // is the phone number missing?
  if (!values.phone.trim()) {
    errors.phone = "Phone number is missing";
    // does the phone number only contain numbers?
  } else if (!/^\d+$/.test(values.phone.trim())) {
    errors.phone = "Must be a valid phone number";
  }

  // is the address missing?
  if (!values.address.trim()) {
    errors.address = "Address is missing";
  }

  // is the zip missing?
  if (!values.zip.trim()) {
    errors.zip = "Zip is missing";
    // does the zip only contain numbers?
  } else if (!/^\d+$/.test(values.zip.trim())) {
    errors.zip = "Must be a valid zip code";
  }

  // is the city missing?
  if (!values.city.trim()) {
    errors.city = "City is missing";
  }

  // is the country missing?
  if (!values.country.trim()) {
    errors.country = "Country is missing";
  }

  // is the selected payment type "e-money" and is the e-money number missing?
  if (values.paymentType === "e-money" && !values.eMoneyNum) {
    errors.eMoneyNum = "Number is missing";
    // is the selected payment type "e-money" and is the e-money number only numbers?
  } else if (
    values.paymentType === "e-money" &&
    !/^\d+$/.test(values.eMoneyNum.trim())
  ) {
    errors.eMoneyNum = "Must be a valid number";
  }

  // is the selected payment type "e-money" and is the e-money pin missing?
  if (values.paymentType === "e-money" && !values.eMoneyPin) {
    errors.eMoneyPin = "Pin is missing";
    // is the selected payment type "e-money" and is the e-money pin only numbers?
  } else if (
    values.paymentType === "e-money" &&
    !/^\d+$/.test(values.eMoneyPin.trim())
  ) {
    errors.eMoneyPin = "Must be a valid pin";
  }

  return errors;
};

export default validateForm;
