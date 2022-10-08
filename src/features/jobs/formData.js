import Joi from "joi";

export const profileForm = [
  {
    id: "fullName",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    value: "",
    rules: {
      isRequired: true,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "fatherName",
    label: "Father name",
    placeholder: "Enter your father name",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "motherName",
    label: "Mother name",
    placeholder: "Enter your mother name",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "enrollment",
    label: "Enrollment Number",
    placeholder: "Enter your college enrollment number",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "address",
    label: "Address",
    placeholder: "Enter your addresss",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "collegeName",
    label: "College Name",
    placeholder: "Enter your college name",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "resumeLink",
    label: "Resume link",
    placeholder: "https://your-resume-link",
    type: "text",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "email",
    label: "Email",
    placeholder: "example@example.com",
    type: "email",
    value: "",
    rules: {
      isRequired: true,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "phone",
    label: "Phone number",
    placeholder: "Enter you phone number",
    type: "number",
    value: "",
    rules: {
      isRequired: true,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "collegeCGPA",
    label: "Current CGPA",
    placeholder: "Enter you current CGPA    ",
    type: "number",
    value: "",
    rules: {
      isRequired: true,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "classTenPercent",
    label: "Class 10 (% percentage)",
    placeholder: "Enter you class 10 total marks",
    type: "number",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "classTwelvePercent",
    label: "Class 12 (% percentage)",
    placeholder: "Enter you class 12 total marks",
    type: "number",
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string().alphanum().min(3).max(30).required(),
    },
  },
  {
    id: "course",
    label: "Course",
    placeholder: "Select course",
    type: "select",
    options: [
      {
        label: "B. Tech",
        value: "b.tech",
      },
      {
        label: "IIIT",
        value: "iiit",
      },
      {
        label: "BSMS",
        value: "bsms",
      },
    ],
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.string(),
    },
  },
  {
    id: "passingYear",
    label: "Passing Year",
    placeholder: "Select passing year",
    type: "select",
    options: [
      {
        label: "2023",
        value: 2023,
      },
      {
        label: "2024",
        value: 2024,
      },
      {
        label: "2025",
        value: 2025,
      },
    ],
    value: "",
    rules: {
      isRequired: false,
    },
    validations: {
      joi: Joi.number(),
    },
  },
];
