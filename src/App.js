import AppliedJobsPage from "./pages/AppliedJobs.page";
import JobsApplyPage from "./pages/JobsApply.page";
import JobsDetailPage from "./pages/JobsDetail.page";
import JobsListPage from "./pages/JobsList.page";
import LoginPage from "./pages/Login.page";
import PageNotFound from "./pages/PageNotFound.page";
import ProfileFormPage from "./pages/ProfileForm.page";
import PublishJobPage from "./pages/PublishJob.page";
import StudentStatsPage from "./pages/StudentStats.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AppliedJobReviewPage from "./pages/AppliedJobReview.page";
import StudentDetailsPage from "./pages/StudentDetails.page";
import ProfileOverviewPage from "./pages/ProfileOverview.page";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/jobs" element={<JobsListPage />} />
        <Route path="/jobs/apply/:jobId" element={<JobsApplyPage />} />
        <Route path="/jobs/applied" element={<AppliedJobsPage />} />
        <Route path="/jobs/applied/:jobId" element={<AppliedJobReviewPage />} />
        <Route path="/jobs/publish" element={<PublishJobPage />} />
        <Route path="/jobs/:jobId" element={<JobsDetailPage />} />
        <Route path="/profile" element={<ProfileOverviewPage />} />
        <Route path="/profile/update" element={<ProfileFormPage />} />
        <Route path="/students/stats" element={<StudentStatsPage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
