import StudentRow from "./StudentRow";

function AttendanceTable() {
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
            <StudentRow />
          </tbody>
        </table>

      </div>

      <div className="card-footer d-flex justify-content-end gap-2">
        <button className="btn btn-outline-secondary">
          Export CSV
        </button>
        <button className="btn btn-primary">
          Save Attendance
        </button>
      </div>
    </div>
  );
}

export default AttendanceTable;
