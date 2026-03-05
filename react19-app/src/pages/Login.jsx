import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;