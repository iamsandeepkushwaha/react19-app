import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// Normal Import

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
// Lazy Import - 👉 Dashboard tabhi load hoga jab use karega

function App() {
  return (
    <>
      {/* Direct Lazy Loading Example */}
      <Suspense fallback={<h2>Loading Dashboard...</h2>}>
        <Dashboard />
      </Suspense>
      {/* 👉 Loading UI automatic 😍 */}

      {/* Lazy Loading with Routing 🔥 (MOST COMMON) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;