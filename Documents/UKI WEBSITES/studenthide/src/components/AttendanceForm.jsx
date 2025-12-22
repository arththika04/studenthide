function AttendanceForm() {
  return (
    <div className="card mb-4">
      <div className="card-header fw-bold">
        Attendance Form
      </div>

      <div className="card-body">
        <div className="row g-3">

          <div className="col-md-3">
            <label className="form-label">Select Class</label>
            <select className="form-select">
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Attendance Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-3">
            <label className="form-label">Search Student</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter student name"
            />
          </div>

          <div className="col-md-3 d-flex align-items-end">
            <button className="btn btn-success w-100">
              Mark Attendance
            </button>
          </div>

        </div>

        <div className="mt-4 d-flex gap-4">
          <span className="badge bg-success fs-6">Present: 5</span>
          <span className="badge bg-danger fs-6">Absent: 2</span>
          <span className="badge bg-secondary fs-6">Total: 7</span>
        </div>

      </div>
    </div>
  );
}

export default AttendanceForm;
