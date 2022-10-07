import React from "react";
import Button from "../../components/Button.component";
import Container from "../../components/Container.component";

const InputBlock = () => {
  return (
    <div className="mb-4">
      <label
        htmlFor="company-website"
        className="block text-md font-medium text-gray-700">
        Email
      </label>
      <input
        type="text"
        className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="email"
        placeholder="example@gmail.com"
      />
    </div>
  );
};

const UploadFile = () => {
  return (
    <div>
      <label className="block text-md font-medium text-gray-700">
        Upload Resume
      </label>
      <div className="max-w-full">
        <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" />
        </label>
      </div>
    </div>
  );
};

const ProfileForm = () => {
  return (
    <Container>
      <div className="p-4 ">
        <div className="bg-white xs:p-6 lg:p-12 rounded-lg drop-shadow-lg">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-center	md:gap-x-12 lg:gap-x-16	">
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
          </div>
          <div className="mt-6 mb-2">
            <Button label="Update" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileForm;
