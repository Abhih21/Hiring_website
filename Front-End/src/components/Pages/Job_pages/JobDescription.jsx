import React from 'react';
import { GoArrowLeft } from 'react-icons/go'; // Importing GoArrowLeft icon
import HomeLayout from '../../../Layouts/HomeLayout';


const JobDescription = () => {
  return (
    <div className="flex">
      <HomeLayout />
      <section className="flex w-9/12 relative left-80 top-20">
        <div className="p-6 w-11/12 bg-white min-h-screen">
          <div className="mb-6">
            <div className="flex gap-3">
              <GoArrowLeft className="text-2xl mt-3" />
              <button className="text-gray-600 mb-4 text-4xl">
                Post a Job
              </button>
            </div>
            <div className="flex mt-4 space-x-4 w-9/12">
              <button className="px-4  text-gray-600 py-2 text-xl">
                Job Details
              </button>
              <button className="px-4 py-2  text-blue-600 border-b-2 border-blue-600  text-xl">
                Job Description
              </button>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-10 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-semibold mb-6">Post a Job</h1>
            <div className="space-y-6">
              <div className="p-4 border border-dotted border-gray-400">
                <h2 className="text-lg font-medium mb-2">Details</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Add the description of the job, responsibilities, who you are, and nice-to-haves."
                  maxLength={500}
                  rows={3}
                />
              </div>
              <div className="p-4 border border-dotted border-gray-400">
                <h2 className="text-lg font-medium mb-2">Job Descriptions</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter job description"
                  maxLength={500}
                  rows={3}
                />
              </div>
              <div className="p-4 border border-dotted border-gray-400">
                <h2 className="text-lg font-medium mb-2">Responsibilities</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter job responsibilities"
                  maxLength={500}
                  rows={3}
                />
              </div>
              <div className="p-4 border border-dotted border-gray-400">
                <h2 className="text-lg font-medium mb-2">Who You Are</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter qualifications"
                  maxLength={500}
                  rows={3}
                />
              </div>
              <div className="p-4 border border-dotted border-gray-400">
                <h2 className="text-lg font-medium mb-2">Nice-To-Haves</h2>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter nice-to-haves"
                  maxLength={500}
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end mt-10  space-x-8">
              <button className="px-6 py-3 bg-gray-300 rounded-md hover:bg-gray-400">
                Review
              </button>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
