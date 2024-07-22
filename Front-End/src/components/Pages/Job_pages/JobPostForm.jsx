// PostJobForm.js
import React, { useState } from 'react';
import HomeLayout from '../../../Layouts/HomeLayout';
import { GoArrowLeft } from 'react-icons/go';

const JobPostForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryRange, setSalaryRange] = useState([5000, 22000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [skills, setSkills] = useState([
    'Graphic Design',
    'Communication',
    'Illustrator',
  ]);

  return (
    <>
      <div className="flex">
        <HomeLayout></HomeLayout>
        <section className="flex w-9/12 relative left-80 top-20">
          <div className="p-6 w-11/12  bg-white min-h-screen">
            <div className="mb-6 ">
              <div className="flex gap-3">
                <GoArrowLeft className="text-2xl mt-3" />
                <button className="text-gray-600 mb-4 text-4xl ">
                  {' '}
                  Post a Job
                </button>
              </div>
              <div className="flex mt-4 space-x-4 w-9/12">
                <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 text-xl">
                  Job Details
                </button>
                <button className="px-4 py-2 text-gray-600 text-xl">
                  Job Description
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl w-10/11 font-semibold mb-2">
                Basic Information
              </h2>
              
              <p className="text-gray-600 mb-4">
                This information will be displayed publicly
              </p>
              <hr />
              <div className="mb-6 mt-4">
                <label className="block text-gray-700  text-xl mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  className="w-3/4 p-2 border rounded"
                  placeholder="e.g. Software Engineer"
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                />
                <p className="mt-2 text-gray-600 text-sm">
                  At least 80 characters
                </p>
              </div>
              <div className="mb-6 ">
                <label className="block text-gray-700 mb-2 text-lg">
                  Type of Employment
                </label>
                <div className="flex text-lg mt-2 flex-wrap space-x-4">
                  {[
                    'Full-Time',
                    'Part-Time',
                    'Remote',
                    'Internship',
                    'Contract',
                  ].map(type => (
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
                <label className="block text-gray-700 mt-2 text-lg mb-2">
                  Salary
                </label>
                <div className="flex items-center space-x-4 mb-2">
                  <input
                    type="number"
                    className="w-1/3 p-2 border rounded"
                    value={salaryRange[0]}
                    onChange={e =>
                      setSalaryRange([+e.target.value, salaryRange[1]])
                    }
                  />
                  <span className="text-gray-700">to</span>
                  <input
                    type="number"
                    className="w-1/3 p-2 border rounded"
                    value={salaryRange[1]}
                    onChange={e =>
                      setSalaryRange([salaryRange[0], +e.target.value])
                    }
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={salaryRange[0]}
                  onChange={e =>
                    setSalaryRange([+e.target.value, salaryRange[1]])
                  }
                  className="w-1/2 block mt-3"
                />
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={salaryRange[1]}
                  onChange={e =>
                    setSalaryRange([salaryRange[0], +e.target.value])
                  }
                  className="w-1/2 mt-3"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-xl mb-2">
                  Categories
                </label>
                <select
                  multiple
                  className="w-3/4 p-2 border rounded"
                  value={selectedCategories}
                  onChange={e =>
                    setSelectedCategories(
                      [...e.target.selectedOptions].map(option => option.value)
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
                <div className="flex flex-wrap space-x-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-200 text-blue-800 rounded flex items-center space-x-1"
                    >
                      <span>{skill}</span>
                      <button
                        onClick={() =>
                          setSkills(skills.filter(s => s !== skill))
                        }
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={() => setSkills([...skills, 'New Skill'])}
                    className="px-2 py-1 bg-blue-600 text-white rounded"
                  >
                    + Add Skills
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobPostForm;
