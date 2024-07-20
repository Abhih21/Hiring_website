import HomeLayout from "../../../Layouts/HomeLayout"
import ApplicantTableData from './ApplicantTableData';
import Barchart from '../Charts/Barchart';
import PieChart from '../Charts/PieChart';
import DonutChart from '../Charts/DonutChart';

const ApplicantTracking = () => {

    //donut
    const series= [44, 55, 13, 33];
    const labels = ["abc", "bcd"]

      // Pie chart data
      const pieSeries = [44, 55, 13, 43, 22];
      const pieLabels = ['LinkedIn', 'Social Media', 'WhatsApp', 'Instagram', 'Job Sites'];

    //barchartData
     const seriesData =[{name: "Total Jobs", data: [8, 4, 15, 5, 2, 3, 0]}]
     const categories = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "Marketing Specialist", "Sales Manager", "Business Analyst"];
     const colors = ["#1E90FF", "#32CD32", "#FFD700", "#FF6347", "#6A5ACD", "#FF69B4", "#20B2AA"];


  return (
    <>
    <div className="flex ">
    <HomeLayout></HomeLayout>
    <section className="relative left-80 top-20">
<div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-6">Application Tracking</h1>
    <div className="">
      <div className="flex justify-between  mb-8">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Day</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Week</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Month</button>
        </div>
        <div className="flex items-center border p-1 space-x-2">
          <span>Jul 19 - Jul 25</span>
          <button className="px-4 py-2 bg-gray-200 rounded">&#x1F4C5;</button>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Source Counts</h2>
          <div className="">
            <PieChart series={pieSeries} labels={pieLabels} width={380} height={250}/>
        </div>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Application Response</h2>
          <div className="w-full h-64">
          <DonutChart series={series} width={250} labels={labels} />
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <span className="block text-2xl font-bold">94</span>
              <span>Reviewed</span>
            </div>
            <div>
              <span className="block text-2xl font-bold">25</span>
              <span>Interview Scheduled</span>
            </div>
            <div>
              <span className="block text-2xl font-bold">245</span>
              <span>Total Applications</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 shadow mb-64 rounded">
        <h2 className="text-xl font-bold mb-4">Application By Jobs</h2>
        <div className="w-full h-64 ">
        <Barchart className="" seriesData={seriesData} categories={categories} titleText="Application By Jobs" width={1000} height={525} colors={colors}/>
        </div>
      </div>
    </div>
    <div className="">
   <ApplicantTableData></ApplicantTableData>
    </div>
    </section>
    </div>
    </>
  );
};

export default ApplicantTracking;
