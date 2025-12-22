import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">404</h1>
      <p className="mb-3">Page Not Found</p>

      <Link to="/" className="btn btn-outline-primary">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
