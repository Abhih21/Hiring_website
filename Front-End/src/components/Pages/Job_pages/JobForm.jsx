import React, { useState } from "react";
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/solid"; // Assuming you're using Heroicons

const JobForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    resume: "",
    candidateImage: "", // Updated field name
    jobPosition: "",
    skills: "",
    portfolio: "",
    github: "",
    linkedin: "",
    additionalInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithFiles = new FormData();

    for (const key in formData) {
      formDataWithFiles.append(key, formData[key]);
    }

    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/candidate/apply",
        formDataWithFiles,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );
      setMessage(response.data.message);
      console.log(response.data.message);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Hide tick icon after 3 seconds
    } catch (error) {
      if (error.response) {
        const contentType = error.response.headers["content-type"];
        if (contentType && contentType.indexOf("application/json") !== -1) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Invalid email or password.");
        }
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Job Application Form
      </h2>
      {isSubmitted && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-75">
          <CheckCircleIcon className="h-16 w-16 text-green-500 z-50" />
        </div>
      )}
      {message && (
        <div className="mb-4 text-center text-lg font-semibold text-green-600">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Job Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Position
              </label>
              <input
                type="text"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Additional Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Portfolio
              </label>
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                GitHub
              </label>
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Upload Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Candidate Image
              </label>
              <input
                type="file"
                name="candidateImage" // Updated field name
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
