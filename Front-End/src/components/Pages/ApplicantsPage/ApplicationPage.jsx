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
      <div className="Container flex flex-row ">
        <HomeLayout></HomeLayout>
        <section className="relative left-80 top-24 w-9/12">
          <div className="flex flex-row items-center   justify-between ">
            <div className="flex justify-center items-center gap-2">
              <GoArrowLeft className="h-8 w-8 " />
              <h1 className="font-bold text-4xl">Applications</h1>
            </div>
            <div className="">
              <Link to="/JobPostForm">
                <button className="flex items-center px-7 py-3 bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ml-4">
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Post a Job
                </button>
              </Link>
            </div>
          </div>
          <div className="category mt-7">
            <CategoryMenu></CategoryMenu>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-normal text-2xl">Total Applicants : 5 </h1>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                className="p-2 px-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
              <FaSearch className="absolute text-gray-400" />
              <button
                // onClick={handleSearch}
                className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </div>
          <ApplicantsTable></ApplicantsTable>
        </section>
      </div>
    </>
  );
};

export default ApplicationPage;
