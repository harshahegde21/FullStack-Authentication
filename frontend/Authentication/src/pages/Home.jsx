import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/logout");
      const resStatus = response.data.status;
      if (resStatus == "success") {
        navigate("/login");
      }
    } catch (error) {
      alert("Error in logout.Please try again later")
    }
  };
  return (
    <div className="bg-blue-50 max-h-fit min-w-fit">
      <div className="flex justify-center">
        <h1 className="text-4xl "> Welcome to Home</h1>
      </div>

      <div className="flex justify-center mt-50">
        <button
          onClick={handleLogout}
          className="border-1 cursor-pointer h-8 w-15 rounded bg-blue-500 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
