import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Register.scss";
import axios from "axios";

const url =
  process.env.REACT_APP_PROTOCOL +
  "://" +
  process.env.REACT_APP_IP +
  ":" +
  process.env.REACT_APP_BACKEND_PORT;
const Register = () => {
  // useEffect(() => {
  //   document.title = 'Register';
  // }, []);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.username === "" || inputs.password === "") {
      alert("Your username/password is empty!");
    } else if (inputs.password !== inputs.confirmPassword) {
      alert(
        "Please ensure that your password and your confirmed password are same."
      );
    } else {
      try {
        const res = await axios.post(url + "/api/register/", inputs);
        console.log("register res: ", res.data);
        if (res.data == "Username exists.") {
          alert("Username already exists!");
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
        alert("Error: " + err);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <h1>Register</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Register</button>
        </form>
        <span>
          Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
