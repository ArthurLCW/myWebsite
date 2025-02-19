import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const url =
  process.env.REACT_APP_PROTOCOL +
  "://" +
  process.env.REACT_APP_IP +
  ":" +
  process.env.REACT_APP_BACKEND_PORT;
const Login = () => {
  // useEffect(() => {
  //   document.title = 'Login';
  // }, []);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.username === "" || inputs.password === "") {
      alert("Your username/password is empty!");
    } else {
      try {
        const res = await axios.post(url + "/api/login", inputs);
        console.log("login res: ", res.data);
        if (res.data == "Username/password error.") {
          alert("Username or password INCORRECT!");
        } else {
          await login(inputs);
          console.log("Login Success with username: ", res.data);
          navigate("/");
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
        <h1>Login</h1>
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
          <button onClick={handleSubmit}>Login</button>
        </form>
        <span>
          Do NOT have an account?
          <Link to="/register">Register</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
