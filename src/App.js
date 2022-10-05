import AppliedJobsPage from "./pages/AppliedJobs.page";
import JobsApplyPage from "./pages/JobsApply.page";
import JobsDetailPage from "./pages/JobsDetail.page";
import JobsListPage from "./pages/JobsList.page";
import LoginPage from "./pages/Login.page";
import PageNotFound from "./pages/PageNotFound.page";
import ProfileFormPage from "./pages/ProfileForm.page";
import PublishJobPage from "./pages/PublishJob.page";
import StudentStatsPage from "./pages/StudentStats.page";

function App() {
  return (
    <>
      <AppliedJobsPage />
      <ProfileFormPage />
      <JobsApplyPage />
      <JobsDetailPage />
      <JobsListPage />
      <StudentStatsPage />
      <PublishJobPage />
      <LoginPage />
      <PageNotFound />
    </>
  );
}

export default App;
