import { useState } from "react";
import StudentRow from "./StudentRow";

function AttendanceTable() {

  const [students, setStudents] = useState([
    { id: 1, roll: "001", name: "Alice Johnson", status: "Present", remarks: "" },
    { id: 2, roll: "002", name: "Bob Smith", status: "Absent", remarks: "Sick leave" },
  ]);

  const toggleStatus = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Present" ? "Absent" : "Present" }
          : s
      )
    );
  };

  return (
    <div className="card">
      <div className="card-body table-responsive">

        <table className="table table-bordered table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th className="text-center">Status</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onToggle={toggleStatus}
              />
            ))}
          </tbody>
        </table>

      </div>

      <div className="card-footer d-flex justify-content-end gap-2">
        <button className="btn btn-outline-secondary">Export CSV</button>
        <button className="btn btn-primary">Save Attendance</button>
      </div>
    </div>
  );
}

export default AttendanceTable;
