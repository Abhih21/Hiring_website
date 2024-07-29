import { GoArrowLeft, GoChevronDown } from "react-icons/go";
import HomeLayout from "../../../Layouts/HomeLayout";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ApplicantResume() {
  const location = useLocation();
  const [stage, setStage] = useState("Interview");

  useEffect(() => {
    // Set the initial stage based on the current path
    if (location.pathname === "/detailsapplicant") {
      setStage("In-Review");
    } else if (location.pathname === "/Applicantresume") {
      setStage("Shortlisted");
    } else if (location.pathname === "/scheduleinterview") {
      setStage("Interview");
    } else if (location.pathname === "/InterviewScheduled") {
      setStage("Hired / Declined");
    }
  }, [location.pathname]);

  return (
    <HomeLayout>
      <section className=" sm:px-6  ">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex justify-center items-center gap-2 mb-4 sm:mb-0">
              <GoArrowLeft className="h-8 w-8" />
              <h1 className="font-bold text-2xl sm:text-4xl">Application</h1>
            </div>
            <button className="flex items-center px-5 sm:px-7 py-3 bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              <GoChevronDown className="mr-2" />
              More Action
            </button>
          </div>
          <hr className="mt-4 sm:mt-8" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between">
          <div className="flex flex-col items-center sm:flex-row mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold">Roman Kutepov</h1>
              <p>Madrid, Spain</p>
              <p>Email: jeromeBell45@email.com</p>
              <p>Phone: +44 1245 572 135</p>
              <p>
                Website:{" "}
                <a href="https://www.jeromebell.com" className="text-blue-500">
                  www.jeromebell.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-end lg:mr-10 gap-4 lg:gap-0 mt-8 lg:mt-0">
            <Link to="/applicantDetails">
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
        </div>

        <div className="max-w-6xl p-4 sm:p-6">
          <div className="bg-white shadow-md border rounded-lg p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4"
              />
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold">John Doe</h1>
                <p className="text-gray-600">Software Developer</p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl sm:text-2xl font-bold border-b-2 border-blue-500 inline-block">
                Profile
              </h2>
              <p className="mt-4 text-gray-700">
                Experienced software developer with a strong background in
                developing scalable applications using modern technologies.
                Passionate about coding and constantly learning new skills.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-bold border-b-2 border-blue-500 inline-block">
                Experience
              </h2>
              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Software Developer at ABC Corp
                </h3>
                <p className="text-gray-600">Jan 2020 - Present</p>
                <p className="mt-2 text-gray-700">
                  Developed and maintained web applications using React and
                  Node.js. Collaborated with cross-functional teams to deliver
                  high-quality software.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Junior Developer at XYZ Inc
                </h3>
                <p className="text-gray-600">Jun 2018 - Dec 2019</p>
                <p className="mt-2 text-gray-700">
                  Assisted in the development of internal tools and
                  applications. Gained experience in front-end and back-end
                  development.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-bold border-b-2 border-blue-500 inline-block">
                Education
              </h2>
              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">
                  University of Technology, 2014 - 2018
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-bold border-b-2 border-blue-500 inline-block">
                Skills
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Reject Applicant
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Schedule Interview
            </button>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}

export default ApplicantResume;
