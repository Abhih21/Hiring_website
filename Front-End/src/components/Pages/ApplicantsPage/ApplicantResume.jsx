import { GoArrowLeft, GoChevronDown } from "react-icons/go";
import HomeLayout from "../../../Layouts/HomeLayout";
import CategoryMenu from "./CategoryMenu";
import { useState } from "react";





function ApplicantResume() {

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
          <hr className="mt-8"/>

          <div className="flex gap-20 justify-between">
        {/* < CategoryMenu /> */} 
        <div className="flex items-center mt-8">
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
                <div className="flex mt-28 mr-8 bg-slate-100 p-3 rounded-md items-center space-x-4 ">
                    <button onClick={() => setStage('In-Review')} className={`px-4 py-2 rounded ${stage === 'In-Review' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>In-Review</button>
                    <button onClick={() => setStage('Shortlisted')} className={`px-4 py-2 rounded ${stage === 'Shortlisted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Shortlisted</button>
                    <button onClick={() => setStage('Interview')} className={`px-4 py-2 rounded ${stage === 'Interview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Interview</button>
                    <button onClick={() => setStage('Hired / Declined')} className={`px-4 py-2 rounded ${stage === 'Hired / Declined' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Hired / Declined</button>
                </div>
                </div>
        </div> 
      <div className="max-w-5xl   p-6">
        {/* < CategoryMenu /> */} 
          {/* <div className="flex bg-slate-200 justify-end  rounded-md py-2 ml-96  mr-4 space-x-4 ">
                    <button onClick={() => setStage('In-Review')} className={`px-6 py-2 rounded ${stage === 'In-Review' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>In-Review</button>
                    <button onClick={() => setStage('Shortlisted')} className={`px-6 py-2 rounded ${stage === 'Shortlisted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Shortlisted</button>
                    <button onClick={() => setStage('Interview')} className={`px-6 py-2 rounded ${stage === 'Interview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Interview</button>
                    <button onClick={() => setStage('Hired / Declined')} className={`px-6 py-2 rounded ${stage === 'Hired / Declined' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Hired / Declined</button>
                </div> */}
      


        <div>
    <div className="container  mt-1 mb-4">
      <div className="bg-white shadow-md  border rounded-lg p-14">
        <div className="flex ml-6 mb-4  items-center text-center">
        <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-gray-600">Software Developer</p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block">Profile</h2>
          <p className="mt-4 text-gray-700">
            Experienced software developer with a strong background in developing scalable applications using modern technologies. Passionate about coding and constantly learning new skills.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block">Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Software Developer at ABC Corp</h3>
            <p className="text-gray-600">Jan 2020 - Present</p>
            <p className="mt-2 text-gray-700">
              Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Junior Developer at XYZ Inc</h3>
            <p className="text-gray-600">Jun 2018 - Dec 2019</p>
            <p className="mt-2 text-gray-700">
              Assisted in the development of internal tools and applications. Gained experience in front-end and back-end development.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block">Education</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of Technology, 2014 - 2018</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block">Skills</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
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

export default ApplicantResume;