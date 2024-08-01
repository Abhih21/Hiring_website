import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../../store/Auth";

const ApplicantsTable = ({ candidates }) => {
  // const {  } = useAuth();

  return (
    <div className="overflow-x-auto mt-6 border">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-6 border-b-2 border-gray-300 text-left leading-4 text-gray-400 tracking-wider shadow-lg text-xl">
              Full Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">
              Time
            </th>
            <th className="px-12 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <img
                    className="h-10 w-10 rounded-full ml-4"
                    src={candidate.imageUrl || "path/to/default-image.jpg"} // Adjust image path if necessary
                    alt={candidate.firstName + " " + candidate.lastName}
                  />
                  <div className="ml-4">
                    <div className="text-lg leading-5 font-medium text-gray-900">
                      {candidate.firstName + " " + candidate.lastName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <span
                  className={`px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(
                    candidate.status,
                  )}`}
                >
                  {candidate.status}
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <span
                  className={`px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryColor(
                    candidate.category || "Not specified",
                  )}`}
                >
                  {candidate.category || "Not specified"}
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="text-base font-normal leading-5 text-gray-900">
                  {new Date(candidate.date).toLocaleDateString()}{" "}
                  {/* Format the date if necessary */}
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Link to={`/applicantDetails/${candidate._id}`}>
                  <button className="bg-blue-600 text-slate-100 hover:bg-blue-500 hover:text-slate-300 font-bold py-2.5 px-4 rounded">
                    See Application
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

const statusColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "reviewed":
      return "bg-blue-100 text-blue-800";
    case "approved":
      return "bg-green-100 text-green-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const categoryColor = (category) => {
  switch (category) {
    case "Full time":
      return "bg-yellow-100 text-yellow-800";
    case "Internship":
      return "bg-blue-100 text-blue-800";
    case "Trainee":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default ApplicantsTable;
