function Dashboard() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="mb-3">Student Attendance System</h1>

        <p className="text-muted mb-4">
          Welcome! Click below to manage attendance.
        </p>

        <a href="/attendance" className="btn btn-primary">
          Go to Attendance
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
