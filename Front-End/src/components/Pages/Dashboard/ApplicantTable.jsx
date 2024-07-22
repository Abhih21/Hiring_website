

const ApplicantTable = () => {
  // Example data
  const jobs = [
    { id: 1, jobTitle: 'Frontend Developer', dateToFill: 'Open', openings: '5', applicants: '5'},
    { id: 2, jobTitle: 'Backend Developer', dateToFill: 'Closed', openings: '5', applicants: '5' },
    { id: 3, jobTitle: 'UX/UI Designer', dateToFill: 'Open', openings: '5', applicants: '5' },
    { id: 4, jobTitle: 'Data Analyst', dateToFill: 'Open', openings: '5', applicants: '5'},
  ];

  return (
    <>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-gray-300 shadow-md rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-5 px-4">Job Title</th>
            <th className="text-left py-4 px-4">Date to Fill</th>
            <th className="text-left py-2 px-4">Openings</th>
            <th className="text-left py-2 px-4">Applicants</th>
            <th className="text-left py-2 px-9">Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b border-gray-200">
              <td className="py-7 px-4 ">{job.jobTitle}</td>
              <td className="py-7 px-4">{job.dateToFill}</td>
              <td className="py-7 px-4">{job.openings}</td>
              <td className="py-7 px-4">{job.applicants}</td>
              <td className="py-7 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-9 rounded">
                  View
                </button>
              </td>
            </tr>
             
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default ApplicantTable;
