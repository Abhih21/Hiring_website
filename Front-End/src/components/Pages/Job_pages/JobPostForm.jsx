import React, { useState } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import axios from "axios";

const JobPostForm = () => {
  // State variables
  const [jobTitle, setJobTitle] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", jobTitle);
    formData.append("salaryRange", JSON.stringify(salaryRange));
    formData.append("categories", JSON.stringify(selectedCategories));
    formData.append("skills", JSON.stringify(skills));
    formData.append("description", jobDescription);
    formData.append("companyName", companyName);
    formData.append("companyWebsite", companyWebsite);
    if (companyLogo) {
      formData.append("companyLogo", companyLogo);
    }
    formData.append("applicationDeadline", applicationDeadline);

    // Debugging FormData content
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/job/createJobPost",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );
      console.log("Response:", response);
      if (response.status === 201) {
        setMessage("Created");
      } else {
        setMessage("Error creating job post");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating job post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeLayout>
      <section className="flex flex-col lg:flex-row shadow-md bg-white lg:w-full lg:p-1 min-h-screen">
        <div className="flex flex-col rounded p-6 space-y-6 lg:space-y-8 lg:w-full">
          <div className="flex items-center gap-3 mb-6">
            <GoArrowLeft className="text-2xl" />
            <Link to="">
              <button className="text-gray-600 text-xl lg:text-2xl font-semibold">
                Post a Job
              </button>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 mb-6">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 text-xl lg:text-2xl">
              Job Details
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
              <p className="text-gray-600 mb-4">
                This information will be displayed publicly
              </p>
              <hr />
              <div className="mb-6 mt-4">
                <label className="block text-gray-700 text-lg mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  className="w-full md:w-3/4 p-2 border rounded"
                  placeholder="e.g. Software Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
                <p className="mt-2 text-gray-600 text-sm">
                  At least 80 characters
                </p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 text-lg">
                  Type of Employment
                </label>
                <div className="flex flex-wrap space-x-4">
                  {[
                    "Full-Time",
                    "Part-Time",
                    "Remote",
                    "Internship",
                    "Contract",
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={type}
                        className="form-checkbox"
                      />
                      <label htmlFor={type} className="text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Salary
                </label>
                <div className="flex flex-col md:flex-row items-center space-x-4 mb-2">
                  <input
                    type="number"
                    className="w-full md:w-1/3 p-2 border rounded"
                    value={salaryRange[0]}
                    onChange={(e) =>
                      setSalaryRange([+e.target.value, salaryRange[1]])
                    }
                  />
                  <span className="text-gray-700">to</span>
                  <input
                    type="number"
                    className="w-full md:w-1/3 p-2 border rounded"
                    value={salaryRange[1]}
                    onChange={(e) =>
                      setSalaryRange([salaryRange[0], +e.target.value])
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={salaryRange[0]}
                    onChange={(e) =>
                      setSalaryRange([+e.target.value, salaryRange[1]])
                    }
                    className="w-full md:w-1/2 block mt-3"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={salaryRange[1]}
                    onChange={(e) =>
                      setSalaryRange([salaryRange[0], +e.target.value])
                    }
                    className="w-full md:w-1/2 mt-3"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Categories
                </label>
                <select
                  multiple
                  className="w-full md:w-3/4 p-2 border rounded"
                  value={selectedCategories}
                  onChange={(e) =>
                    setSelectedCategories(
                      [...e.target.selectedOptions].map(
                        (option) => option.value,
                      ),
                    )
                  }
                >
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Required Skills
                </label>
                <div className="flex flex-wrap space-x-2 mb-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-blue-800 rounded flex items-center space-x-1"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setSkills(skills.filter((s) => s !== skill))
                        }
                        className="text-sm"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="w-full md:w-3/4 p-2 border rounded"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Job Description
                </label>
                <textarea
                  className="w-full md:w-3/4 p-2 border rounded"
                  rows="5"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full md:w-3/4 p-2 border rounded"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Company Website
                </label>
                <input
                  type="text"
                  className="w-full md:w-3/4 p-2 border rounded"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Company Logo
                </label>
                <input
                  type="file"
                  className="w-full md:w-3/4 p-2 border rounded"
                  onChange={(e) => setCompanyLogo(e.target.files[0])}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg mb-2">
                  Application Deadline
                </label>
                <input
                  type="date"
                  className="w-full md:w-3/4 p-2 border rounded"
                  value={applicationDeadline}
                  onChange={(e) => setApplicationDeadline(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded text-lg"
              >
                Post Job
              </button>
            </div>
          </form>
          {loading && <p>Loading...</p>}
          {message && <p>{message}</p>}
        </div>
      </section>
    </HomeLayout>
  );
};

export default JobPostForm;
