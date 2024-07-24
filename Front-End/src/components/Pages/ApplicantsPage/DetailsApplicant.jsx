import { GoArrowLeft, GoChevronDown } from "react-icons/go";
import HomeLayout from "../../../Layouts/HomeLayout";
import { useState } from "react";
import { Link } from "react-router-dom";





function DetailsApplicant() {

  const [stage, setStage] = useState('Interview');

  return (
    <>
        <div className="flex">
        <HomeLayout></HomeLayout>
    <section>     
     <div className="p-4 relative  left-80 top-20">
     <div className="flex flex-row items-center   justify-between ">
            <div className="flex justify-center items-center gap-2">
              <GoArrowLeft className="h-8 w-8 " />
              <h1 className="font-bold text-4xl">Application</h1>
            </div>
            <div className="">
              <button className="flex items-center px-7 py-3 bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ml-4">
              <GoChevronDown />
                More Action

              </button>
            </div>
          </div>
      <div className="max-w-5xl mt-12 mx-auto   p-3 rounded-lg shadow-md">
       <div className="flex gap-20 justify-between">
        {/* < CategoryMenu /> */} 
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Roman Kutepov</h1>
            <p>Madrid, Spain</p>
            <p>Email: jeromeBell45@email.com</p>
            <p>Phone: +44 1245 572 135</p>
            <p>Website: <a href="https://www.jeromebell.com" className="text-blue-500">www.jeromebell.com</a></p>
          </div>
        </div>
        <div className="">
                <div className="flex mt-20 bg-slate-100 p-3 rounded-md items-center space-x-4 mb-8">
                    <Link to="/detailsapplicant"><button onClick={() => setStage('In-Review')} className={`px-4 py-2 rounded ${stage === 'In-Review' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Profile</button></Link>
                    <Link to="/Applicantresume"><button onClick={() => setStage('Shortlisted')} className={`px-4 py-2 rounded ${stage === 'Shortlisted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Resume</button></Link>
                    <Link to="/scheduleinterview"><button onClick={() => setStage('Interview')} className={`px-4 py-2 rounded ${stage === 'Interview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Schedule Interview</button></Link>
                    <Link to="/InterviewScheduled"> <button onClick={() => setStage('Hired / Declined')} className={`px-4 py-2 rounded ${stage === 'Hired / Declined' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Hiring Process</button></Link>
                </div>
                </div>
        </div> 
        <hr />

        <div className="mb-6 mt-4">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Been working as a lead consultancy in RealEstate for last 5 years. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Work History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">Freelance Consultant / Senior Consultant</h3>
              <p>Microsoft</p>
              <p>NY, NY</p>
              <p>Jan 2016 - Jan 2020</p>
              <p>Senior Consultant for last 2 years. Managed all the HR programs.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">Freelance Consultant / Senior Consultant</h3>
              <p>Microsoft</p>
              <p>NY, NY</p>
              <p>Jan 2016 - Jan 2020</p>
              <p>Senior Consultant for last 2 years. Managed all the HR programs.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
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
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full">Focus</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">Doctor</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">Doctor</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">Microsoft Excel Certification</h3>
            <p>Microsoft</p>
            <p>Jan 2016 - Jan 2020</p>
            <p>Completed my MS Word diploma here.</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Software</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full">Adobe XD</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">Sketch Pro</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Languages</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full">English</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">French</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Interests</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full">Cycling</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">Music</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-red-500 text-white rounded">Reject Applicant</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Schedule Interview</button>
        </div>
      </div>
    </div>
    </section>
    </div>
    
    
    </>
  )
}

export default DetailsApplicant;