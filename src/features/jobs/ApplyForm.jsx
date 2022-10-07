import React from "react";
import Button from "../../components/Button.component";
import Container from "../../components/Container.component";
import Input from "../../components/Input.component";
import InputLabel from "../../components/InputLabel.component";

const InputBlock = () => {
  return (
    <div className="mb-4">
      <InputLabel />
      <Input />
    </div>
  );
};

const ApplyForm = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="max-w-lg mx-auto bg-white rounded-lg xs:py-4 xs:px-4 md:py-8 md:px-8 shadow-xl">
          <div>
            <h2 className="text-lg font-medium text-center text-gray-600 mb-4">
              Apply for Software Development Engineer role at Amazon
            </h2>
          </div>
          <div className="mb-8">
            <InputBlock />
            <InputBlock />
            <InputBlock />
            <InputBlock />
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
          </div>
          <div className="flex justify-center items-center">
            <Button
              label="submit"
              onClick={() => {
                console.log("apply form submit");
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ApplyForm;
