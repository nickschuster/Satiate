import Joi from "joi";

// Form schema.
export const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
});

// Validate a form field and update if there are errors.
export const validate = (type, value, setErrorState) => {
  const result = schema.validate({
    [type]: value,
  });

  setErrorState((prev) => {
    prev[type] = result.error ? result.error.message : "";
    return { ...prev };
  });
};

export const formIsValid = (fields) => {
  let isValid = true;
  for (const field in fields) {
    const result = schema.validate({
      [field]: fields[field],
    });
    isValid = !!result.error;
  }

  return isValid;
};
