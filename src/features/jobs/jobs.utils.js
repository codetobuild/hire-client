export const getInitialFormValues = (formData) => {
  let values = {};
  formData.forEach((val) => {
    values = { ...values, [val.id]: val.value };
  });
  return values;
};

export const getJoiFormValidationRules = (formData) => {
  let rules = {};
  formData.forEach((val) => {
    rules = { ...rules, [val.id]: val.validations.joi };
  });
  return rules;
};
