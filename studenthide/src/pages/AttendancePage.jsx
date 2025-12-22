import Header from "../components/Header";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

function AttendancePage() {
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
import Header from "../components/Header";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

  const students = [
    {
      id: 1,
      roll: "001",
      name: "Alice Johnson",
      status: "present",
      remarks: ""
    },
    {
      id: 2,
      roll: "002",
      name: "Bob Smith",
      status: "absent",
      remarks: "Sick leave"
    }
  ];

  return (
    <div className="bg-light min-vh-100">
      <Header />

      <div className="container my-4">
        <AttendanceForm />
        <AttendanceTable students={students} />
      </div>
    </div>
  );



export default AttendancePage;
