import { GoArrowLeft, GoChevronDown } from "react-icons/go";
import HomeLayout from "../../../Layouts/HomeLayout";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ApplicantDetails() {
  const location = useLocation();
  const [stage, setStage] = useState("Profile");

  useEffect(() => {
    // Determine the initial stage based on the URL
    if (location.pathname.includes("applicantDetails")) {
      setStage("Profile");
    } else if (location.pathname.includes("Applicantresume")) {
      setStage("Resume");
    } else if (location.pathname.includes("scheduleinterview")) {
      setStage("Interview");
    } else if (location.pathname.includes("InterviewScheduled")) {
      setStage("Hired / Declined");
    }
  }, [location.pathname]);

  return (
    <HomeLayout>
      <section className="">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <GoArrowLeft className="h-6 w-6 md:h-8 md:w-8" />
            <h1 className="font-bold text-2xl md:text-4xl">Application</h1>
          </div>
          <div className="flex justify-end w-full lg:w-auto">
            <button className="flex items-center px-4 py-2 md:px-7 md:py-3 bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              <GoChevronDown className="mr-2" />
              More Action
            </button>
          </div>
        </div>
        <div className="max-w-6xl mt-10  mx-auto p-8 rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex items-center mb-6 lg:mb-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Roman Kutepov</h1>
                <p>Madrid, Spain</p>
                <p>Email: jeromeBell45@email.com</p>
                <p>Phone: +44 1245 572 135</p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.jeromebell.com"
                    className="text-blue-500"
                  >
                    www.jeromebell.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-end items-end ml-6 p-3 rounded-md">
              <Link to="/applicantDetails">
                <button
                  onClick={() => setStage("Profile")}
                  className={`px-4 py-2 rounded ${
                    stage === "Profile"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Profile
                </button>
              </Link>
              <Link to="/Applicantresume">
                <button
                  onClick={() => setStage("Resume")}
                  className={`px-4 py-2 rounded ${
                    stage === "Resume"
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
          <hr className="mb-6" />
          <div className="mb-6 mt-4">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Professional Summary
            </h2>
            <p>
              Been working as a lead consultancy in RealEstate for last 5 years.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Work History
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">
                  Freelance Consultant / Senior Consultant
                </h3>
                <p>Microsoft</p>
                <p>NY, NY</p>
                <p>Jan 2016 - Jan 2020</p>
                <p>
                  Senior Consultant for last 2 years. Managed all the HR
                  programs.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">
                  Freelance Consultant / Senior Consultant
                </h3>
                <p>Microsoft</p>
                <p>NY, NY</p>
                <p>Jan 2016 - Jan 2020</p>
                <p>
                  Senior Consultant for last 2 years. Managed all the HR
                  programs.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">UIU</h3>
                <p>NY</p>
                <p>High School</p>
                <p>Jan 2016 - Jan 2020</p>
                <p>Completed my graduation diploma here.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">UIU</h3>
                <p>NY</p>
                <p>High School</p>
                <p>Jan 2016 - Jan 2020</p>
                <p>Completed my graduation diploma here.</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap space-x-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Focus
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Doctor
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Doctor
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Certifications
            </h2>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">
                Microsoft Excel Certification
              </h3>
              <p>Microsoft</p>
              <p>Jan 2016 - Jan 2020</p>
              <p>Completed my MS Word diploma here.</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Software</h2>
            <div className="flex flex-wrap space-x-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Adobe XD
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Sketch Pro
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Languages</h2>
            <div className="flex flex-wrap space-x-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                English
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                French
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Interests</h2>
            <div className="flex flex-wrap space-x-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Cycling
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full mb-2">
                Music
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
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

export default ApplicantDetails;
