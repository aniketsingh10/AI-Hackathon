import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./screens/Loginscreen/Login";
import Home from "./screens/Homescreen/Home";
import { Signup } from "./screens/Loginscreen/Signup";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Portfolio } from "./screens/Portfolio/Portfolio";
import { Analysis } from "./screens/Analysis/Analysis";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
