import { useState } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import { Link } from "react-router-dom";

const applicant = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  position: "Software Engineer",
};

const ScheduleInterview = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const [stage, setStage] = useState("Interview");

  const handleSchedule = () => {
    // Logic to handle scheduling the interview
    console.log("Scheduled Interview:", { date, time, day, month });
  };

  return (
    <>
      <div className="flex ">
        <HomeLayout></HomeLayout>
        <section className="container w-9/12 relative left-80 top-28 p-5 ml-4">
          <div className="">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h1 className="text-4xl font-bold mb-14 text-center">
                Schedule Interview
              </h1>
              <div className="flex w-11/12 ml-80">
                <div className="flex justify-end space-x-4    mb-8  bg-slate-100 p-3 rounded-md items-center">
                  <Link to="/detailsapplicant">
                    <button
                      onClick={() => setStage("In-Review")}
                      className={`px-4 py-2 rounded ${stage === "In-Review" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                      Profile
                    </button>
                  </Link>
                  <Link to="/Applicantresume">
                    <button
                      onClick={() => setStage("Shortlisted")}
                      className={`px-4 py-2 rounded ${stage === "Shortlisted" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                      Resume
                    </button>
                  </Link>
                  <Link to="/scheduleinterview">
                    <button
                      onClick={() => setStage("Interview")}
                      className={`px-4 py-2 rounded ${stage === "Interview" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                      Schedule Interview
                    </button>
                  </Link>
                  <Link to="/InterviewScheduled">
                    {" "}
                    <button
                      onClick={() => setStage("Hired / Declined")}
                      className={`px-4 py-2 rounded ${stage === "Hired / Declined" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                      Hiring Process
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Applicant Profile</h2>
                <div className="mt-2">
                  <p className="text-gray-700">
                    <strong>Name:</strong> {applicant.name}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {applicant.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Position:</strong> {applicant.position}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold">Interview Details</h2>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-1">Date:</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-1">Time:</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-1">Day:</label>
                  <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Enter day"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-1">Month:</label>
                  <input
                    type="text"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="Enter month"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
              </div>

              <button
                onClick={handleSchedule}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Schedule Interview
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScheduleInterview;
