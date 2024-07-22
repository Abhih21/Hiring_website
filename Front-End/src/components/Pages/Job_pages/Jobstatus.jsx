// Stats.js
import React from 'react';

const Jobstatus = () => {
  return (
    <div className="w-2/3 h-56  flex space-x-6">
      <div className="w-1/2 bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Total Jobs Application</h2>
        <p className="text-5xl font-bold">45</p>
      </div>
      <div className="w-1/2 bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Total Active Jobs</h2>
        <p className="text-5xl font-bold">18</p>
      </div>
    </div>
  );
};

export default Jobstatus;
