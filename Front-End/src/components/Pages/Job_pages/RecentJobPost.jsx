// RecentJobPosts.js
import React from "react";

const RecentJobPost = () => {
  return (
    <div className="bg-white w-full  p-4 rounded shadow">
      <h2 className="text-xl py-3 font-semibold mb-4">Recent Job Post</h2>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="border p-4 rounded">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white mr-2">
                P
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Social Media Assistant
                </h3>
                <p className="text-gray-600">Colorcow</p>
              </div>
            </div>
            <div className="flex space-x-2 mb-2">
              <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded">
                Marketing
              </span>
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded">
                Full-Time
              </span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded">
                Design
              </span>
            </div>
            <p className="text-gray-600 mb-10">
              Pitch is looking for Customer Manager to join marketing team for
              working full time.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentJobPost;
