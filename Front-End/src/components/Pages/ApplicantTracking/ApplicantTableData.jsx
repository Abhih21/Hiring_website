import React, { useState } from "react";
import { Link } from "react-router-dom";

function ApplicantTableData() {
  const [selected, setSelected] = useState("All"); // Default selected button

  const statuses = [
    { label: "All", count: 45 },
    { label: "In Review", count: 34 },
    { label: "Interviewing", count: 18 },
    { label: "Assessment", count: 5 },
    { label: "Offered", count: 2 },
    { label: "Hired", count: 1 },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Job Applicants</h1>
          <Link to="/jobpage">
            <button className="px-6 py-3 flex items-end bg-blue-500 text-white rounded mr-8">
              Recent Job Post
            </button>
          </Link>
        </div>
        <div className="flex space-x-2 mb-3">
          {statuses.map((status) => (
            <button
              key={status.label}
              onClick={() => setSelected(status.label)}
              className={`px-4 py-2 rounded ${
                selected === status.label
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {status.label} ({status.count})
            </button>
          ))}
        </div>
        <div className="bg-white shadow rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                  Roles
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                  Date Applied
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3  text-lg font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "Abhishek Negi",
                  role: "Software Engineer",
                  date: "24 July 2021",
                  status: "In Review",
                },
                {
                  id: 2,
                  name: "Ashish Kathait",
                  role: "Full Stack Developer",
                  date: "20 July 2021",
                  status: "Shortlisted",
                },
                {
                  id: 3,
                  name: "Azam",
                  role: "Designer",
                  date: "16 July 2021",
                  status: "Offered",
                },
                {
                  id: 4,
                  name: "ABCD",
                  role: "Social Media Assistant",
                  date: "14 July 2021",
                  status: "Interviewing",
                },
                {
                  id: 5,
                  name: "DigitalOcean",
                  role: "Social Media Assistant",
                  date: "10 July 2021",
                  status: "Applied",
                },
              ].map((applicant) => (
                <tr key={applicant.id}>
                  <td className="px-6 py-5 whitespace-nowrap">
                    {applicant.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {applicant.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {applicant.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {applicant.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                        applicant.status === "In Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : applicant.status === "Shortlisted"
                            ? "bg-green-100 text-green-800"
                            : applicant.status === "Offered"
                              ? "bg-blue-100 text-blue-800"
                              : applicant.status === "Interviewing"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-red-100 text-red-800"
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-center font-medium">
                    <Link to="/applicantDetails">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-50 px-6 py-4">
            <nav className="flex justify-between">
              <button className="px-4 py-2 bg-gray-200 rounded">
                Previous
              </button>
              <span>Page 1 of 2</span>
              <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantTableData;
