import { useState, useRef } from "react";
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
  const [interviewer, setInterviewer] = useState("");

  const [activeStage, setActiveStage] = useState("Interview");

  const profileRef = useRef(null);
  const resumeRef = useRef(null);
  const interviewRef = useRef(null);
  const hiringRef = useRef(null);

  const handleSchedule = () => {
    // Logic to handle scheduling the interview
    console.log("Scheduled Interview:", {
      date,
      time,
      day,
      month,
      interviewer,
    });
  };

  const handleButtonClick = (stage, ref) => {
    setActiveStage(stage);
    // Reset all button styles
    [profileRef, resumeRef, interviewRef, hiringRef].forEach((buttonRef) => {
      if (buttonRef.current) {
        buttonRef.current.classList.remove("bg-blue-500", "text-white");
        buttonRef.current.classList.add("bg-gray-200");
      }
    });
    // Set the clicked button style
    if (ref.current) {
      ref.current.classList.add("bg-blue-500", "text-white");
      ref.current.classList.remove("bg-gray-200");
    }
  };

  return (
    <HomeLayout>
      <section className=" sm:p-8">
        <div className="bg-white shadow-md rounded-lg  sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-14 text-center">
            Schedule Interview
          </h1>
          <div className="flex flex-wrap justify-end space-x-2 sm:space-x-4 mb-6 sm:mb-8 p-3 rounded-md items-center">
            <Link to="/applicantDetails">
              <button
                ref={profileRef}
                onClick={() => handleButtonClick("In-Review", profileRef)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded ${
                  activeStage === "In-Review"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Profile
              </button>
            </Link>
            <Link to="/Applicantresume">
              <button
                ref={resumeRef}
                onClick={() => handleButtonClick("Shortlisted", resumeRef)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded ${
                  activeStage === "Shortlisted"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Resume
              </button>
            </Link>
            <Link to="/scheduleinterview">
              <button
                ref={interviewRef}
                onClick={() => handleButtonClick("Interview", interviewRef)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded ${
                  activeStage === "Interview"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Schedule Interview
              </button>
            </Link>
            <Link to="/InterviewScheduled">
              <button
                ref={hiringRef}
                onClick={() => handleButtonClick("Hired / Declined", hiringRef)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded ${
                  activeStage === "Hired / Declined"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Status
              </button>
            </Link>
          </div>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Applicant Profile
            </h2>
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
            <h2 className="text-lg sm:text-xl font-semibold">
              Interview Details
            </h2>
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
            <div className="mt-2">
              <label className="block text-gray-700 mb-1">
                Assign Interviewer:
              </label>
              <input
                type="text"
                value={interviewer}
                onChange={(e) => setInterviewer(e.target.value)}
                placeholder="Enter interviewer's name"
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
      </section>
    </HomeLayout>
  );
};

export default ScheduleInterview;
