import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">
            Welcome to Student Attendance
          </h3>
          <p className="card-text text-muted">
            Click below to manage attendance
          </p>

          <Link to="/attendance" className="btn btn-primary">
            Go to Attendance
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
