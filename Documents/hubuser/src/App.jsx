import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>React Application with GitHub API and useEffect</h1>

      <div className="users">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
