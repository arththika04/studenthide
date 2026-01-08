import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import NotFound from "./pages/NotFound.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
