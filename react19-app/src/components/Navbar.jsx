import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>

      <br /><br />

      {user ? (
        <>
          <h3>Welcome {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Navbar;