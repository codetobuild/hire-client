import { useState, useEffect } from "react";

const useForm = (initialState, schema) => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {}, []);

  const handleChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    setFormValues((p) => ({ ...p, [name]: value }));

    // validate
    const { error } = schema.validate(formValues, {
      abortEarly: false,
    });
    // console.log({ error });
    let errorObj = {};
    error.details.forEach((item) => {
      errorObj = { ...errorObj, [item.path[0]]: item.message };
    });
    setFormErrors((prev) => ({ ...errorObj }));
  };
  return { formValues, formErrors, handleChange };
};

export default useForm;
