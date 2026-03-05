import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // 🔹 Load user from localStorage on first render
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 🔹 Login
  function login() {
    const userData = { name: "Sandeep" };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  // 🔹 Logout
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;