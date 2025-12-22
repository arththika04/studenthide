import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceTable from "./components/AttendanceTable";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Header />

      <div className="container my-4">
        <AttendanceForm />
        <AttendanceTable />
      </div>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttendancePage from "./pages/AttendancePage";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>



export default App;
