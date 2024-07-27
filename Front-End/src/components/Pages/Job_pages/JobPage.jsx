// Dashboard.js
import React from "react";
import Stats from "./Jobstatus";
import RecentJobPosts from "./RecentJobPost";
import HomeLayout from "../../../Layouts/HomeLayout";

const JobPage = () => {
  return (
    <>
      <div className="flex">
        <HomeLayout></HomeLayout>
        <section className="flex relative left-72  top-20 w-4/5">
          <div className="p-10  bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold">
                Here is Job Applications
              </h1>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  + Post a job
                </button>
                <input type="date" className="border rounded p-2" />
              </div>
            </div>
            <div className="flex mt-10 space-x-6 mb-14">
              <Stats />
              <div className="w-1/3 bg-white p-4 rounded shadow">
                <h2 className="text-2xl font-semibold mb-4">
                  Jobs Applied Status
                </h2>
                <div className="flex items-center justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 32 32">
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
                  <div className="ml-4 text-center">
                    <p className="font-bold">60%</p>
                    <p className="text-sm text-gray-600 font-medium">
                      Unsuitable
                    </p>
                    <p className="font-bold">40%</p>
                    <p className="text-sm text-gray-600 font-medium">
                      Interviewed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <button className="px-10 border-none border-b py-4 bg-slate-600 text-slate-100 rounded-r">
                  Recent Job Post
                </button>
              </div>
              <div className="grid gap-4">
                <RecentJobPosts />
              </div>
              <div className="flex justify-center mt-6">
                <button className="px-4 py-2 border rounded">1</button>
                <button className="px-4 py-2 border rounded">2</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobPage;
