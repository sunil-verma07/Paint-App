import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import './login.css'

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const generateError = (error) =>
    toast.error(error, { position: "bottom-right", theme: "dark" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        { ...values },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;

          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <>
    <div className="background">
    <div className="shape"></div>
    <div className="shape"></div>
</div>
<form onSubmit={handleSubmit}>  
    <h3>Login Here</h3>

    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Email" name="email" id="username"  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>

    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" name="password" id="password" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}/>

    <p><Link to="/register">New User? Register Here</Link></p>

    <button type="submit">Log In</button>
    <ToastContainer/>
</form>
</>
  
};

export default Login;
