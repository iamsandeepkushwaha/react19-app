import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;