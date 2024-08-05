import React from "react";

const RecentJobPost = ({ jobs }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Use toLocaleDateString to format the date (adjust options as needed)
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white w-full p-4 rounded shadow">
      <h2 className="text-xl py-3 font-semibold mb-4">Recent Job Post</h2>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white mr-2">
                {job.companyName[0]}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.companyName}</p>
              </div>
            </div>
            <div className="flex space-x-2 mb-2">
              {job.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-2">{job.description}</p>
            <p className="text-gray-600 mt-2">
              <strong>Application Deadline:</strong>{" "}
              {formatDate(job.applicationDeadline)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentJobPost;
