import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import Form from "../components/Form.jsx";
import { useNavigate } from "react-router-dom";
import Loginpage from "./Loginpage.jsx";

const Signup = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

const isValidDatas = ()=>{
  let isTrue = true;
if (username.length < 1 || !username) {
      nameRef.current.textContent = "Please Enter Name";
      isTrue=false;
    }
if (email.length > 6 && (!email || !email.includes("@"))) {
      emailRef.current.textContent = "Please Enter valid Email";
      isTrue=false;
    }
  if (!password || password.length < 6) {
      passwordRef.current.textContent =
        "Password length should be less than or equal to 6";
        isTrue = false;
    }
    return isTrue;

}
  const handleForm = async (e) => {
    e.preventDefault();
    if(isValidDatas()){
      try {
      if (!username || !email || !password) {
        alert("Please Enter All the Details");
        return;
      } else {
        const response = await axios.post("http://localhost:5000/auth/signup", {
          username,
          email,
          password,
        });
        console.log(response.data);
        setuserName("");
        nameRef.current.textContent ="";
        setEmail("");
        emailRef.current.textContent ="";
        setPassword("");
         passwordRef.current.textContent = "";
        const resStatus = response.data;
        if(resStatus.status=="success"){
          navigate("/home");
        }
        
      }
    } catch (error) {
      console.log(error);
      alert("Error");
    }
    }
    
  };

  const navigateToLoginpage = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="flex justify-center bg-blue-400 h-228 md:h-182 w-full ">
      <form method="POST" onSubmit={handleForm} className="md:mt-30 mt-50 ml-1 h-120 px-0 bg-white py-20 w-90 shadow-md rounded-xl ">
        <h2 className="text-4xl ml-25 ">Sign up</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          className="px-2 py-2 border-1 rounded mt-3 w-60 ml-10"
          value={username}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <br />
        <span ref={nameRef} className="text-red-500 ml-10"></span>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="px-2 py-2 border-1 rounded mt-1 w-60 ml-10"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
        <br />
        <span ref={emailRef} className="text-red-500 ml-10"></span>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="px-2 py-2 border-1 rounded mt-1 w-60 ml-10"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />
        <br />
        <span ref={passwordRef} className="text-red-500 ml-10"></span>
        <br />
         <div className="ml-10">
           <p>Already Signed up?</p>
        <button onClick={(e)=>{
          e.preventDefault();
          navigate("/login")
        }} className="cursor-pointer bg- h-7 w-25 text-red-400">Go to Login</button>
        </div>
        <button
          id="submit"
          className="md:ml-32 ml-30 mt-5 px-2 py-1 border-1 rounded-xl cursor-pointer bg-blue-400 text-white"
        >
          Sign in
        </button>
       
        
      </form>
    </div>
  );
};

export default Signup;
