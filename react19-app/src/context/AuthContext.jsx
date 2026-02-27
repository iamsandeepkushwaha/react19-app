import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children})
{
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Sandeep" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider}