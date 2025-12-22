import Header from "../components/Header";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

function AttendancePage() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <AttendanceForm />
        <AttendanceTable />
      </div>
    </>
  );
}

export default AttendancePage;
