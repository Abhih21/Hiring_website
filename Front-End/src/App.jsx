import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LogIn/LoginPage";
import SignUpPage from "./components/LogIn/SignUpPage";
import ApplicantResume from "./components/Pages/AplicantDetails/ApplicantResume.jsx";
import ScheduleInterview from "./components/Pages/AplicantDetails/ScheduleInterview.jsx";
import InterviewScheduled from "./components/Pages/AplicantDetails/InterviewScheduled.jsx";
import JobPage from "./components/Pages/Job_pages/JobPage.jsx";
import JobPostForm from "./components/Pages/Job_pages/JobPostForm.jsx";
import JobDescription from "./components/Pages/Job_pages/JobDescription.jsx";
import Logout from "./components/LogIn/Logout.jsx";
import TimeToHire from "./components/Pages/TimeToHire/TimeToHire.jsx";
import PerformanceAnalysis from "./components/Pages/PerformanceAnalysis.jsx/PerformanceAnalysis.jsx";
import ReactDatePicker from "./components/Pages/Dashboard/ReactDatePicker.jsx";
import ApplicationPage from "./components/Pages/ApplicantsPage/ApplicationPage.jsx";
import ApplicantDetails from "./components/Pages/AplicantDetails/ApplicantDetails.jsx";
import ApplicationTracking from "./components/Pages/ApplicantTracking/ApplicationTracking.jsx";
import Calendar from "./components/Pages/InterviewManagement/Calendar.jsx";
import InterviewList from "./components/Pages/InterviewManagement/InterviewList.jsx";
import DashboardPage from "../src/components/Pages/Dashboard/DashboardPage.jsx";
import JobForm from "./components/Pages/Job_pages/JobForm.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/applicationPage" element={<ApplicationPage />} />
      <Route path="/applicantDetails" element={<ApplicantDetails />} />
      <Route path="/Applicantresume" element={<ApplicantResume />} />
      <Route path="/scheduleinterview" element={<ScheduleInterview />} />
      <Route path="/applicationTracking" element={<ApplicationTracking />} />
      <Route path="/scheduleinterview" element={<ScheduleInterview />} />
      <Route path="/InterviewScheduled" element={<InterviewScheduled />} />
      <Route path="/jobpage" element={<JobPage />} />
      <Route path="/JobPostForm" element={<JobPostForm />} />
      <Route path="/jobDescription" element={<JobDescription />} />
      <Route path="/TimeToHire" element={<TimeToHire />} />
      <Route path="/performanceAnalysis" element={<PerformanceAnalysis />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/ReactDatePicker" element={<ReactDatePicker />} />
      <Route
        path="/interviewManagement/ScheduleInterview"
        element={<InterviewList />}
      />
      <Route path="/interviewManagement/calendar" element={<Calendar />} />
      <Route path="/JobForm" element={<JobForm />} />
    </Routes>
  );
}

export default App;
