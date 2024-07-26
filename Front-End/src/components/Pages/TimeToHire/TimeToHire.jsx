import React, { useState } from "react";
import BarChart from "./BarChart";
import JobChart from "./JobChart";
import HomeLayout from "../../../Layouts/HomeLayout";

const TimeToHire = () => {
  const [activeTab, setActiveTab] = useState("week");

  const barchartdata = () => {
    switch (activeTab) {
      case "week":
        return {
          series: [
            {
              name: "Product A",
              data: [5, 7, 6, 8, 5, 6, 7],
            },
            {
              name: "Product B",
              data: [3, 4, 5, 6, 4, 5, 6],
            },
            {
              name: "Product C",
              data: [2, 3, 4, 5, 3, 4, 5],
            },
          ],
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        };
      case "month":
        return {
          series: [
            {
              name: "Product A",
              data: [20, 25, 30, 35, 40, 45, 50],
            },
            {
              name: "Product B",
              data: [15, 20, 25, 30, 35, 40, 45],
            },
            {
              name: "Product C",
              data: [10, 15, 20, 25, 30, 35, 40],
            },
          ],
          categories: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
          ],
        };
      case "year":
        return {
          series: [
            {
              name: "Product A",
              data: [30, 25, 35, 40, 20, 30],
            },
            {
              name: "Product B",
              data: [25, 20, 30, 35, 15, 25],
            },
            {
              name: "Product C",
              data: [20, 15, 25, 30, 10, 20],
            },
          ],
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        };
      default:
        return {
          series: [],
          categories: [],
        };
    }
  };

  const getJobChartData = () => {
    switch (activeTab) {
      case "week":
        return {
          series: [
            {
              name: "Application Review",
              data: [2, 3, 2, 3, 2, 3, 2],
            },
            {
              name: "Interviews",
              data: [1, 2, 1, 2, 1, 2, 1],
            },
            {
              name: "Background Checks",
              data: [1, 1, 1, 1, 1, 1, 1],
            },
          ],
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        };
      case "month":
        return {
          series: [
            {
              name: "Application Review",
              data: [5, 6, 5, 6, 5, 6, 5],
            },
            {
              name: "Interviews",
              data: [3, 4, 3, 4, 3, 4, 3],
            },
            {
              name: "Background Checks",
              data: [2, 2, 2, 2, 2, 2, 2],
            },
          ],
          categories: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
          ],
        };
      case "year":
        return {
          series: [
            {
              name: "Application Review",
              data: [10, 12, 10, 12, 10, 12],
            },
            {
              name: "Interviews",
              data: [6, 8, 6, 8, 6, 8],
            },
            {
              name: "Background Checks",
              data: [4, 4, 4, 4, 4, 4],
            },
          ],
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        };
      default:
        return {
          series: [],
          categories: [],
        };
    }
  };

  const chartData = barchartdata();
  const jobChartData = getJobChartData();

  return (
    <div className="flex">
      <HomeLayout />
      <section className="relative left-80 top-24 w-4/6 justify-between items-center">
        <div className="p-4 ml-20 border-b-2 border-blue-200 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-800">Time To Hire</h1>
          <div className="space-x-4 bg-slate-100 ml-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "week"
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-600"
              } rounded-md`}
              onClick={() => setActiveTab("week")}
            >
              Week
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "month"
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-600"
              } rounded-md`}
              onClick={() => setActiveTab("month")}
            >
              Month
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "year"
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-600"
              } rounded-md`}
              onClick={() => setActiveTab("year")}
            >
              Year
            </button>
          </div>
        </div>
        <h1 className="mt-14 text-center text-xl font-semibold">
          Time Per Stage
        </h1>
        <div className="ml-14 mt-8">
          <JobChart
            series={jobChartData.series}
            categories={jobChartData.categories}
          />
        </div>

        <h1 className="mt-14 text-center text-xl font-semibold">
          Average Time per Stage in Hiring Pipeline
        </h1>
        <div className="ml-14">
          <BarChart
            series={chartData.series}
            categories={chartData.categories}
          />
        </div>
      </section>
    </div>
  );
};

export default TimeToHire;
