import React, { useEffect } from "react";
import Stats from "./Jobstatus";
import RecentJobPosts from "./RecentJobPost";
import HomeLayout from "../../../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { useAuth } from "../../../store/Auth";

const JobPage = () => {
  const { jobs, fetchPostJobs } = useAuth();

  useEffect(() => {
    fetchPostJobs(); // Fetch jobs when the component mounts
  }, [fetchPostJobs]);

  return (
    <HomeLayout>
      <section className="flex flex-col lg:flex-row lg:w-[98%] w-full p-4 lg:p-10 bg-gray-100 min-h-screen">
        <div className="flex flex-col flex-1 space-y-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-6">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Here is Job Applications
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
              <Link to="/JobPostForm">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  + Post a Job
                </button>
              </Link>
              <input
                type="date"
                className="border rounded p-2 mt-2 lg:mt-0 lg:ml-4"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-14 space-y-6 lg:space-y-0">
            <Stats />
            <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
                Jobs Applied Status
              </h2>
              <div className="flex items-center justify-center">
                <svg className="w-16 h-16 lg:w-20 lg:h-20" viewBox="0 0 32 32">
                  <circle
                    className="text-blue-600"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    r="14"
                    cx="16"
                    cy="16"
                  />
                  <circle
                    className="text-gray-300"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    r="14"
                    cx="16"
                    cy="16"
                    strokeDasharray="88"
                    strokeDashoffset="52"
                  />
                </svg>
                <div className="ml-4 text-lg lg:text-xl font-medium text-gray-800">
                  59%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
              Recent Job Posts
            </h2>
            {jobs && jobs.length > 0 ? (
              <RecentJobPosts jobs={jobs} />
            ) : (
              <p>No recent job posts available.</p>
            )}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default JobPage;
