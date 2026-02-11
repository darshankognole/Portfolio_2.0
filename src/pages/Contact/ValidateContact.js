const validateContact = (values) => {

  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Enter valid email";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};

export default validateContact;
