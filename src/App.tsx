import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { Layout } from "./components/layout/Layout";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import { Toaster } from "sonner";
import Service from "./pages/Service";
import Dashboard from "./pages/admin/Dashboard";
import Department from "./pages/Department";
import Team from "./pages/Team";

function App() {
  return (
    <>
      {/* <div className="grid gap-4 md:grid-cols-3 mt-24 p-2"> 
       <Card className="p-4 bg-slate-200">
          <InterviewQuestionsForm
            answer=""
            question=""
            job=""
            optionA=""
            optionB=""
            optionC=""
            optionD=""
            shouldDelete={false}
            id={""}
          />
        </Card>
        <Card className="p-4 bg-slate-200">
          <JobForm
            input={{
              description: "",
              jobType: [],
              location: "",
              role: [],
              staffQuantity: 0,
              title: "",
              id: "",
              isClosed: false,
              isCompleted: false,
              isOpen: false,
              publish: false,
              shouldDelete: false,
            }}
          />
        </Card>
        <Card className="p-4 bg-slate-200">
          <JobTypeForm input={{ type: "", id: "", shouldDelete: false }} />
        </Card>
        <Card className="p-4 bg-slate-200">
          <LoginForm email="" password="" />
        </Card>
        <Card className="p-4 bg-slate-200">
          <RecruitedForm
            input={{ job: "", note: "", user: "", id: "", shouldDelete: false }}
          />
        </Card>
        <Card className="p-4 bg-slate-200">
          <RoleForm input={{ role: "", id: "", shouldDelete: false }} />
        </Card>
        <Card className="p-4 bg-slate-200">
          <NewUserForm
            input={{
              email: "",
              username: "",
              password1: "",
              password2: "",
            }}
          />
        </Card>
        <Card className="p-4 bg-slate-200">
          <UpdateUserForm
            input={{
              email: "",
              username: "",
              avatar: "",
              firstName: "",
              id: "",
              isActive: false,
              isStaff: false,
              lastName: "",
              middleName: "",
              resume: "",
              shouldDelete: false,
            }}
          />
        </Card>
        <Card className="p-4 bg-slate-200">
          <VerifyUserForm token={""} />
        </Card>
        <Card className="p-4 bg-slate-200">
          <InterviewAnswersForm
            answer=""
            question=""
            user=""
            id={""}
            shouldDelete={false}
          />
        </Card> 
      </div> */}
      <Toaster richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Index />} path="/" />
          <Route element={<Dashboard />} path="dashboard/" />
          <Route element={<About />} path="about/" />
          <Route element={<Department />} path="department/" />
          <Route element={<Contact />} path="contact/" />
          <Route element={<Service />} path="service/" />
          <Route element={<Team />} path="team/" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
