import  { useState } from 'react';
import HomeLayout from '../../../Layouts/HomeLayout.jsx';
import Barchart from '../Charts/Barchart.jsx';
import { CalendarIcon, PlusIcon } from '@heroicons/react/solid';
import { BsEye } from 'react-icons/bs';
import ApplicantTable from './ApplicantTable.jsx';
import DateSelection from './DateSelection.jsx';
import SemiDonutChart from './SemiDonutChart.jsx';

const DashboardPage = () => {
  const [applicantCurrentPage, setApplicantCurrentPage] = useState(1);


  
//barchat
const seriesData =[{name: "Total Jobs", data: [8, 5, 2, 3]}]
const categories = ["Developer", "Designer", "DevOps", "Marketing"];
const colors = ["#1E90FF", "#32CD32", "#FFD700", "#FF6347", "#6A5ACD", "#FF69B4", "#20B2AA"];


  const handlePeriodSelection = (period) => {
    setSelectedPeriod(period);
    console.log('Selected Period:', period);
    // Handle period change logic (e.g., fetch new data based on the selected period)
  };

  return (
    <>
      <div className="flex h-full  mb-16">
        <HomeLayout />
        <section className='relative left-72'>
          <div className="mt-24 ml-8  flex flex-row gap-40 ">
            <div>
              <h1 className="font-medium text-2xl">Good Morning, Abhishek</h1>
              <p className="font-normal ">
                Here is your job listings statistic report from july19-july25
              </p>
            </div>
            <div className='mt-2'>
            <div className="flex items-center border p-2 rounded-lg">
      <span className="mr-2">Jul 19 - Jul 25</span>
      <CalendarIcon className="h-5 w-5 text-blue-500" />
    </div>
            </div>
            <div>
              <button className="flex items-center px-7 z-1 mt-1 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ml-4">
                <PlusIcon className="h-5 w-5 mr-2" />
                Post a Job
              </button>
            </div>
          </div>
         
          <section className="graphSection flex mt-12">
            <div>
            <Barchart className="flex ml-4" seriesData={seriesData} categories={categories} titleText="Application By Jobs" width={1000} height={525} colors={colors}/>
            </div>
            <section>
            <div className="bg-custom-container p-8 rightSection ml-14 flex flex-col" style={{ width: '397px', height: '199px' }}>
              <div className="flex gap-44">
                <h1 className="font-normal text-2xl">Job Open</h1>
                <div className=" bg-yellow-500 h-7 w-8 flex justify-center items-center rounded-full">
                  <BsEye className="text-white " />
                </div>
              </div>
              <div className="flex mt-14 ml-5 gap-14">
                <h1 className="text-5xl font-semibold">12</h1>
                <span className="text-2xl flex items-end">Job Opened</span>
              </div>
            </div>
            <div className='bg-gray-400 ml-14  mt-2 '>
              <h1 className='text-2xl ml-4 pt-4'>Applicant Summary</h1>
           <div className='flex flex-row pl-6 gap-4 items-center'> <h1 className='text-6xl pb-5 pl-4'>18 </h1> <span className='text-xl font-medium text-gray-600'>Applicant</span>
           </div>
            <SemiDonutChart></SemiDonutChart>
            </div> 
            </section>
          </section>
          <div className="container mt-8 p-6 shadow-xl ml-12" style={{ width: '93%' }} >
            <div className='flex flex-row  justify-between '>
              <h1 className="text-2xl font-bold flex justify-center items-center mb-4">Job Applicant</h1>
            <DateSelection onSelect={handlePeriodSelection}/>  
              </div>
            <ApplicantTable currentPage={applicantCurrentPage} />
          </div>
            <div className='flex justify-center items-center'>
        <button  className="bg-blue-500 hover:bg-blue-700 mt-6  text-white py-2 px-9 rounded"> 
            More
        </button>
      </div>
     
        </section>
      </div>
    </>
  );
};

export default DashboardPage;
