import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LogIn/LoginPage";
import SignUpPage from "./components/LogIn/SignUpPage";
import Dashboard from "./components/Pages/Dashboard/DashboardPage.jsx";
import ApplicantResume from "./components/Pages/AplicantDetails/ApplicantResume.jsx";
import ScheduleInterview from "./components/Pages/AplicantDetails/ScheduleInterview.jsx";
import InterviewScheduled from "./components/Pages/AplicantDetails/InterviewScheduled.jsx";
import JobPage from "./components/Pages/Job_pages/JobPage.jsx";
import JobPostForm from "./components/Pages/Job_pages/JobPostForm.jsx";
import JobDescription from "./components/Pages/Job_pages/JobDescription.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import Logout from "./components/LogIn/Logout.jsx";
import SchedulerComponent from "./components/InterviewManagement/SchedulerComponent.jsx";
import TimeToHire from "./components/Pages/TimeToHire/TimeToHire.jsx";
import PerformanceAnalysis from "./components/Pages/PerformanceAnalysis.jsx/PerformanceAnalysis.jsx";
import Calendar from "./components/InterviewManagement/Calendar.jsx";
import InterviewList from "./components/InterviewManagement/InterviewList.jsx";
import CalendarSidebar from "./components/InterviewManagement/CombinedScheduler.jsx";
import CombinedScheduler from "./components/InterviewManagement/CombinedScheduler.jsx";
import ReactDatePicker from "./components/Pages/Dashboard/ReactDatePicker.jsx";
import ApplicationPage from "./components/Pages/ApplicantsPage/ApplicationPage.jsx";
import ApplicantDetails from "./components/Pages/AplicantDetails/ApplicantDetails.jsx";
import ApplicationTracking from "./components/Pages/ApplicantTracking/ApplicationTracking.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
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
      <Route path="/schedulerComponent" element={<SchedulerComponent />} />
      <Route path="/TimeToHire" element={<TimeToHire />} />
      <Route path="/performanceAnalysis" element={<PerformanceAnalysis />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Interviewlist" element={<InterviewList />} />
      <Route path="/CombinedScheduler" element={<CombinedScheduler />} />
      <Route path="/ReactDatePicker" element={<ReactDatePicker />} />
    </Routes>
  );
}

export default App;
