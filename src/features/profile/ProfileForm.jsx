import { useState } from "react";
import Button from "../../components/Button.component";
import Container from "../../components/Container.component";
import InputElement from "../../components/InputElement.component";
import Joi from "joi";
import { profileForm } from "./formData";
import {
  getInitialFormValues,
  getJoiFormValidationRules,
} from "./profile.utils.js";
import useForm from "../../hooks/useForm";

const ProfileForm = () => {
  let values = getInitialFormValues(profileForm);
  let rules = getJoiFormValidationRules(profileForm);
  const schema = Joi.object(rules);

  const { formValues, formErrors, handleChange } = useForm(values, schema);
  // console.log(formErrors);

  return (
    <Container>
      <div className="p-4">
        <form
          action="/#"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("form submit");
          }}
          className="p-8 bg-white rounded-lg drop-shadow-lg">
          {profileForm.map((item, idx) => (
            <div key={item.id + idx} className="mb-4">
              <label
                htmlFor={item.id}
                className="block text-md font-medium text-gray-700">
                {item.label}
              </label>
              <InputElement
                type={item.type}
                id={item.id}
                name={item.id}
                value={formValues[item.id]}
                placeholder={item.placeholder}
                onChange={handleChange}
                className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                options={item?.options}
              />
              {formErrors?.[item.id] && (
                <span className="text-red-600 text-sm">
                  {formErrors[item.id]}
                </span>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <Button label={"Submit"} btnType={"submit"} />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ProfileForm;
