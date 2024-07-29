import { useState } from "react";
import HomeLayout from "../../../Layouts/HomeLayout.jsx";
import Barchart from "../Charts/Barchart.jsx";
import { CalendarIcon, PlusIcon } from "@heroicons/react/solid";
import { BsEye } from "react-icons/bs";
import ApplicantTable from "./ApplicantTable.jsx";
import DateSelection from "./DateSelection.jsx";
import SemiDonutChart from "./SemiDonutChart.jsx";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";
import ReactDatePicker from "./ReactDatePicker.jsx";
import { format } from "date-fns";

const DashboardPage = () => {
  const [applicantCurrentPage, setApplicantCurrentPage] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)), // Default to current date and next date
  ]);

  const formatDateRange = (start, end) => {
    if (!start || !end) return "Start Date - End Date";

    const formatDate = (date) => {
      const month = format(date, "MMMM").slice(0, 3);
      const day = format(date, "d");
      return `${month} ${day}`;
    };

    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const seriesData = [{ name: "Total Jobs", data: [8, 5, 2, 3] }];
  const categories = ["Developer", "Designer", "DevOps", "Marketing"];
  const colors = [
    "#1E90FF",
    "#32CD32",
    "#FFD700",
    "#FF6347",
    "#6A5ACD",
    "#FF69B4",
    "#20B2AA",
  ];

  const handlePeriodSelection = (period) => {
    // Implement period selection logic here
    console.log("Selected Period:", period);
  };

  return (
    <HomeLayout>
      <div className="bg-gray-50">
        <section className=" ml-8 flex flex-col gap-8">
          <div className="flex justify-between">
            <div>
              <h1 className="font-medium text-2xl text-gray-800">
                {getGreeting()}, Abhishek
              </h1>
              <p className="font-normal text-sm w-62 text-gray-600">
                Here is your job listings statistic report from{" "}
                {formatDateRange(selectedDates[0], selectedDates[1])}
              </p>
            </div>
            <div className="w-40 relative">
              <div
                className="flex items-center border p-2 rounded-lg bg-gray-100 cursor-pointer"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                {selectedDates[0] && selectedDates[1] && (
                  <span className="mr-2 text-gray-800">
                    {formatDateRange(selectedDates[0], selectedDates[1])}
                  </span>
                )}
                <CalendarIcon className="h-5 w-5 text-blue-500" />
              </div>
              <ReactDatePicker
                show={showDatePicker}
                onClose={() => setShowDatePicker(false)}
                onDateChange={(dates) => setSelectedDates(dates)}
                defaultDates={selectedDates}
              />
            </div>
            <div>
              <Link to="/JobPostForm">
                <button className="flex items-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-sm shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Post a Job
                </button>
              </Link>
            </div>
          </div>

          <section className="flex gap-8">
            <Barchart
              className="flex-1"
              seriesData={seriesData}
              categories={categories}
              titleText="Application By Jobs"
              width={585}
              height={498}
              colors={colors}
            />
            <div className="flex flex-col gap-4 w-1/3">
              <div className="bg-white p-8 shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-normal text-gray-800">
                    Job Open
                  </h1>
                  <div className="bg-yellow-200 h-7 w-8 flex justify-center items-center rounded-full">
                    <BsEye className="text-yellow-600" />
                  </div>
                </div>
                <div className="flex mt-6 gap-4 items-end">
                  <h1 className="text-5xl font-semibold text-gray-800">12</h1>
                  <span className="text-2xl text-gray-600">Job Opened</span>
                </div>
              </div>
              <div className="bg-white p-8 shadow-md">
                <h1 className="text-2xl text-gray-800">Applicant Summary</h1>
                <div className="flex gap-4 items-center">
                  <h1 className="text-6xl text-gray-800">18</h1>
                  <span className="text-xl text-gray-600">Applicant</span>
                </div>
                <SemiDonutChart />
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-white shadow-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Job Applicant
              </h1>
              <DateSelection onSelect={handlePeriodSelection} />
            </div>
            <ApplicantTable currentPage={applicantCurrentPage} />
          </div>

          <div className="flex justify-center items-center mt-10">
            <Link to="/applicationPage">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl py-2 px-6 rounded">
                More
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default DashboardPage;
