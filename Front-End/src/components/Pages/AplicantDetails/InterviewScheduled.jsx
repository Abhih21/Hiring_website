import React, { useState, useEffect } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import { Link, useLocation } from "react-router-dom";

const InterviewScheduled = () => {
  const [stage, setStage] = useState("Interview");
  const location = useLocation();

  const applicant = {
    name: "Roman Kutepov",
    location: "Madrid, Spain",
    email: "jeromeBell45@email.com",
    phone: "+44 1245 572 135",
    website: "www.jeromebell.com",
    focus: ["Focus", "Doctor", "Doctor"],
    stageInfo: {
      interviewDate: "10 - 13 July 2021",
      interviewLocation:
        "Silver Crysta Room, Nomad Office, 3517 W. Gray St. Utica, Pennsylvania 57867",
      status: "On Progress",
      assignedTo: [
        "https://via.placeholder.com/32",
        "https://via.placeholder.com/32",
        "https://via.placeholder.com/32",
      ],
    },
  };

  useEffect(() => {
    // Set the stage based on the URL path
    const path = location.pathname;
    if (path.includes("detailsapplicant")) {
      setStage("In-Review");
    } else if (path.includes("Applicantresume")) {
      setStage("Shortlisted");
    } else if (path.includes("scheduleinterview")) {
      setStage("Interview");
    } else if (path.includes("InterviewScheduled")) {
      setStage("Hired / Declined");
    }
  }, [location.pathname]);

  return (
    <>
      <HomeLayout>
        <div className="flex flex-col font-sans min-h-screen p-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Applicant Status</h1>
          </div>

          <section className="flex flex-col md:flex-row md:items-end mt-8">
            <div className="text-center p-6 rounded-lg shadow-md mb-8 md:mb-0 md:mr-8">
              <img
                className="rounded-full w-36 h-36 mb-4 mx-auto"
                src="https://via.placeholder.com/150"
                alt="Roman Kutepov"
              />
              <h2 className="text-2xl font-bold">{applicant.name}</h2>
              <p className="text-gray-600">
                <strong>Location:</strong> {applicant.location}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {applicant.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {applicant.phone}
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{" "}
                <a
                  className="text-blue-500"
                  href={`http://${applicant.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {applicant.website}
                </a>
              </p>
              <div className="mt-4 space-x-2">
                {applicant.focus.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 items-center mt-4 mb-8">
                <Link to="/detailsapplicant">
                  <button
                    onClick={() => setStage("In-Review")}
                    className={`px-4 py-2 rounded ${
                      stage === "In-Review"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Profile
                  </button>
                </Link>
                <Link to="/Applicantresume">
                  <button
                    onClick={() => setStage("Shortlisted")}
                    className={`px-4 py-2 rounded ${
                      stage === "Shortlisted"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Resume
                  </button>
                </Link>
                <Link to="/scheduleinterview">
                  <button
                    onClick={() => setStage("Interview")}
                    className={`px-4 py-2 rounded ${
                      stage === "Interview"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Schedule Interview
                  </button>
                </Link>
                <Link to="/InterviewScheduled">
                  <button
                    onClick={() => setStage("Hired / Declined")}
                    className={`px-4 py-2 rounded ${
                      stage === "Hired / Declined"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Status
                  </button>
                </Link>
              </div>

              <div className="w-full mt-8">
                <div className="text-center p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-8">
                    Current Stage: {stage}
                  </h3>
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div className="text-left md:w-1/2">
                      <p className="text-gray-600 mb-2">
                        <strong>Interview Date:</strong>
                      </p>
                      <p className="text-lg font-medium">
                        {applicant.stageInfo.interviewDate}
                      </p>
                    </div>
                    <div className="text-left md:w-1/2">
                      <p className="text-gray-600 mb-2">
                        <strong>Interview Location:</strong>
                      </p>
                      <p className="text-lg font-medium">
                        {applicant.stageInfo.interviewLocation}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div className="text-left md:w-1/2">
                      <p className="text-gray-600 mb-2">
                        <strong>Interview Status:</strong>
                      </p>
                      <p className="text-lg font-medium">
                        {applicant.stageInfo.status}
                      </p>
                    </div>
                    <div className="text-left md:w-1/2">
                      <p className="text-gray-600 mb-2">
                        <strong>Assigned to:</strong>
                      </p>
                      <div className="flex space-x-2 mt-2">
                        {applicant.stageInfo.assignedTo.map((image, index) => (
                          <img
                            key={index}
                            className="rounded-full w-10 h-10 border-2 border-gray-300"
                            src={image}
                            alt={`Assigned ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600">
                    Give Rating
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </HomeLayout>
    </>
  );
};

export default InterviewScheduled;
