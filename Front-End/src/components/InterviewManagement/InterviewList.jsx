import React from "react";

function InterviewList() {
  const interviews = [
    {
      id: 1,
      name: "Jenny Wilson",
      time: "10:00 AM - 11:00 AM",
      date: "10 July, 2024",
      location: "Silver Crystal Room, Nomad",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      time: "10:00 AM - 11:00 AM",
      date: "11 July, 2024",
      location: "Silver Crystal Room, Nomad",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      time: "10:00 AM - 11:00 AM",
      date: "12 July, 2024",
      location: "Silver Crystal Room, Nomad",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      time: "10:00 AM - 11:00 AM",
      date: "13 July, 2024",
      location: "Silver Crystal Room, Nomad",
    },
    {
      id: 5,
      name: "Jenny Wilson",
      time: "10:00 AM - 11:00 AM",
      date: "14 July, 2024",
      location: "Silver Crystal Room, Nomad",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Candidates</h1>
        <div className="flex items-center space-x-4">
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            {"<"}
          </button>
          <div className="font-medium">NOVEMBER 2024</div>
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
            {">"}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Day
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Week
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Month
          </button>
        </div>
      </div>

      {/* Interview list */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Interview List</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + Add Schedule Interview
          </button>
        </div>
        {interviews.map((interview) => (
          <div key={interview.id} className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-4">
                  <div className="text-lg font-medium">{interview.name}</div>
                  <div className="text-sm text-gray-500">{interview.date}</div>
                  <div className="text-sm text-gray-500">{interview.time}</div>
                  <div className="text-sm text-gray-500">
                    {interview.location}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Reschedule Interview
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewList;
