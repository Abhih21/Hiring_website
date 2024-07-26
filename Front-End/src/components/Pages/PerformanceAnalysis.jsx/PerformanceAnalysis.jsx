import React, { useState } from "react";
import Chart from "./Chart";
import LineChart from "./LineChart";
import HomeLayout from "../../../Layouts/HomeLayout";

const PerformanceAnalysis = () => {
  const [activeTab, setActiveTab] = useState("week");

  const getPieChartData = () => {
    switch (activeTab) {
      case "week":
        return {
          series: [30, 40, 35, 50, 49],
          labels: [
            "LinkedIn",
            "Indeed",
            "Company Website",
            "Referral",
            "Other",
          ],
        };
      case "month":
        return {
          series: [120, 140, 135, 150, 149],
          labels: [
            "LinkedIn",
            "Indeed",
            "Company Website",
            "Referral",
            "Other",
          ],
        };
      case "year":
        return {
          series: [300, 400, 350, 500, 490],
          labels: [
            "LinkedIn",
            "Indeed",
            "Company Website",
            "Referral",
            "Other",
          ],
        };
      default:
        return {
          series: [],
          labels: [],
        };
    }
  };

  const getLineChartData = () => {
    switch (activeTab) {
      case "week":
        return {
          series: [
            {
              name: "Average Time to Hire (days)",
              data: [30, 25, 35, 40, 20, 30],
            },
          ],
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        };
      case "month":
        return {
          series: [
            {
              name: "Average Time to Hire (days)",
              data: [20, 25, 30, 35, 40, 45, 50],
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
              name: "Average Time to Hire (days)",
              data: [40, 30, 35, 25, 50, 45],
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

  const pieChartData = getPieChartData();
  const lineChartData = getLineChartData();

  return (
    <div className="flex ">
      <HomeLayout />
      <main className="flex-grow ml-80 mt-24">
        <div className="p-4 border-b-2 border-blue-200 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-800">
            Performance Analysis
          </h1>
          <div className="space-x-4 bg-slate-100 rounded-md">
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
              className={`px-4 py-2 ${
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
        <h1 className="text-2xl font-bold text-center mt-6">
          Sources Effectiveness
        </h1>
        <div className="p-4 ">
          <Chart series={pieChartData.series} labels={pieChartData.labels} />
        </div>
        <hr />
        <h1 className="text-2xl font-bold text-center mt-20  ">
          Time To Hire Trend
        </h1>
        <div className="p-4 w-5/6 ml-24  mb-20">
          <LineChart
            series={lineChartData.series}
            categories={lineChartData.categories}
          />
        </div>
      </main>
    </div>
  );
};

export default PerformanceAnalysis;
