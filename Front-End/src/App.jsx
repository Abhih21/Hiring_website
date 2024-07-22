import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LogIn/LoginPage';
import SignUpPage from './components/LogIn/SignUpPage';
import Dashboard from './components/Pages/Dashboard/DashboardPage.jsx';
import ApplicantsPage from './components/Pages/ApplicantsPage/ApplicantsPage.jsx';
import DetailsApplicant from './components/Pages/ApplicantsPage/DetailsApplicant.jsx';
import ApplicantResume from './components/Pages/ApplicantsPage/ApplicantResume.jsx';
import ScheduleInterview from './components/Pages/ApplicantsPage/ScheduleInterview.jsx';
import ApplicationTracking from './components/Pages/ApplicantTracking/ApplicantTracking.jsx';
import ApplicantTracking from './components/Pages/ApplicantTracking/ApplicantTracking.jsx';
import InterviewScheduled from './components/Pages/ApplicantTracking/InterviewScheduled.jsx';
import JobPage from './components/Pages/Job_pages/JobPage.jsx';
import JobPostForm from './components/Pages/Job_pages/JobPostForm.jsx';
import JobDescription from './components/Pages/Job_pages/JobDescription.jsx';



function App() {
  return (
   
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applicants" element={<ApplicantsPage />} />
        <Route path="/detailsapplicant" element={<DetailsApplicant />} />
        <Route path="/Applicantresume" element={<ApplicantResume />} />
        <Route path="/scheduleinterview" element={<ScheduleInterview />} />
        <Route path="/applicanttracking" element={<ApplicantTracking />} />
        <Route path="/InterviewScheduled" element={<InterviewScheduled />} />
        <Route path="/JobPage" element={<JobPage />} />
        <Route path="/JobPostForm" element={<JobPostForm />} />
        <Route path="/jobDescription" element={<JobDescription />} />
      </Routes>
  
  );
}

export default App;
