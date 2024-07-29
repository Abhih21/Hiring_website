import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const ApplicantTable = () => {
  const jobs = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      dateToFill: "Open",
      openings: "5",
      applicants: "5",
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      dateToFill: "Closed",
      openings: "5",
      applicants: "5",
    },
    {
      id: 3,
      jobTitle: "UX/UI Designer",
      dateToFill: "Open",
      openings: "5",
      applicants: "5",
    },
    {
      id: 4,
      jobTitle: "Data Analyst",
      dateToFill: "Open",
      openings: "5",
      applicants: "5",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-md  rounded-lg">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">Job Title</th>
            <th className="py-3 px-4 text-left">Date to Fill</th>
            <th className="py-3 px-4 text-left">Openings</th>
            <th className="py-3 px-4 text-left">Applicants</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {jobs.map((job) => (
            <tr key={job.id} className="border-b border-gray-200">
              <td className="py-4 px-4">{job.jobTitle}</td>
              <td className="py-4 px-4">{job.dateToFill}</td>
              <td className="py-4 px-4">{job.openings}</td>
              <td className="py-4 px-4">{job.applicants}</td>
              <td className="py-4 px-4">
                <Link to="/applicationPage">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
                    View
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantTable;
