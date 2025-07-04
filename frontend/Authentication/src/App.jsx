import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Loginpage from "./pages/Loginpage.jsx";

const App = () => {
  return (
    <div className="">
      {/* <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/home" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
