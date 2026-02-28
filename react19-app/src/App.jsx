import { Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  return (
    <>
    <Navbar/>

      {/* 🔗 Navigation */}
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      {/* 🎯 NavLink (active styling) */}
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        About
      </NavLink>

      <hr />

      {/* 🚦 Routes */}
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* 🧭 Dynamic Route (Route Parameter) */}
        <Route path="/user/:id" element={<User />} />
        <Route path="/product/:id" element={<Product />} />

        {/* 🧩 Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ❌ 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;