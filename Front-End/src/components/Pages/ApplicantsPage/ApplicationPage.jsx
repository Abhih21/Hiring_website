import { PlusIcon } from "@heroicons/react/solid";
import HomeLayout from "../../../Layouts/HomeLayout";
import { GoArrowLeft } from "react-icons/go";
import CategoryMenu from "./CategoryMenu";
import { FaSearch } from "react-icons/fa";
import ApplicantsTable from "./ApplicantsTable";
import { Link } from "react-router-dom";

const ApplicationPage = () => {
  return (
    <>
      <HomeLayout>
        <section className="relative w-full p-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GoArrowLeft className="h-6 w-6 md:h-8 md:w-8" />
              <h1 className="font-bold text-2xl md:text-4xl">Applications</h1>
            </div>
            <div className="flex justify-end w-full md:w-auto">
              <Link to="/JobPostForm">
                <button className="flex items-center px-4 py-2 md:px-7 md:py-3 bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Post a Job
                </button>
              </Link>
            </div>
          </div>
          <div className="category mb-4">
            <CategoryMenu />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="font-normal text-lg md:text-2xl mb-4 md:mb-0">
              Total Applicants: 5
            </h1>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  className="w-full md:w-auto p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <ApplicantsTable />
          </div>
        </section>
      </HomeLayout>
    </>
  );
};

export default ApplicationPage;
