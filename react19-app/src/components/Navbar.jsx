import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>

      {user ? (
        <>
          <span>👋 {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;