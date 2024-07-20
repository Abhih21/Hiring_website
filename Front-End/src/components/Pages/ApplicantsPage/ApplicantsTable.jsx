import React from 'react';

const applicants = [
  { name: 'Jake Gyll', status: 'Pending', category: 'Full time', date: '13 July, 2024', action: 'See Application', img: 'path/to/image1.jpg' },
  { name: 'Guy Hawkins', status: 'Reviewed', category: 'Full time', date: '12 July, 2024', action: 'See Application', img: 'path/to/image2.jpg' },
  { name: 'Cyndy Lillibridge', status: 'Approved', category: 'Internship', date: '13 July, 2024', action: 'See Application', img: 'path/to/image3.jpg' },
  { name: 'Rodolfo Goode', status: 'Rejected', category: 'Full time', date: '10 July, 2024', action: 'See Application', img: 'path/to/image4.jpg' },
  { name: 'Leif Floyd', status: 'Pending', category: 'Internship', date: '11 July, 2024', action: 'See Application', img: 'path/to/image5.jpg' },
  { name: 'Jenny Wilson', status: 'Reviewed', category: 'Trainee', date: '13 July, 2024', action: 'See Application', img: 'path/to/image6.jpg' },
  { name: 'Jerome Bell', status: 'Approved', category: 'Trainee', date: '5 July, 2024', action: 'See Application', img: 'path/to/image7.jpg' },
  { name: 'Eleanor Pena', status: 'Rejected', category: 'Trainee', date: '5 July, 2024', action: 'See Application', img: 'path/to/image8.jpg' },
  { name: 'Darrell Steward', status: 'Pending', category: 'Full time', date: '3 July, 2024', action: 'See Application', img: 'path/to/image9.jpg' },
  { name: 'Floyd Miles', status: 'Reviewed', category: 'Internship', date: '1 July, 2024', action: 'See Application', img: 'path/to/image10.jpg' },
];

const ApplicantsTable = () => {
  return (
    <div className="overflow-x-auto  mt-6 border">
      <table className="min-w-full  bg-white">
        <thead>
          <tr>
            <th className="px-6 py-6 border-b-2 border-gray-300 text-left leading-4 text-gray-400 tracking-wider shadow-lg text-xl">Full Name</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">Status</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">Category</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">Time</th>
            <th className="px-12 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-400 text-xl tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                  <img className="h-10 w-10 rounded-full ml-4" src={applicant.img} alt={applicant.name} />
                  <div className="ml-4">
                    <div className="text-lg leading-5 font-medium text-gray-900">{applicant.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <span className={`px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(applicant.status)}`}>
                  {applicant.status}
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <span className={`px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryColor(applicant.category)}`}>
                  {applicant.category}
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="text-base font-normal leading-5 text-gray-900">{applicant.date}</div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <button className="bg-blue-600 text-slate-100 hover:bg-blue-500 hover:text-slate-300 font-bold py-2.5 px-4 rounded">
                  {applicant.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Previous</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

const statusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Reviewed':
      return 'bg-blue-100 text-blue-800';
    case 'Approved':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const categoryColor = (category) => {
  switch (category) {
    case 'Full time':
      return 'bg-yellow-100 text-yellow-800';
    case 'Internship':
      return 'bg-blue-100 text-blue-800';
    case 'Trainee':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default ApplicantsTable;
