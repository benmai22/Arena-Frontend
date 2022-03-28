import React, { useState, useEffect } from "react";
import axios from "axios";
function Register({ setRegUser }) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Msg, setMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [Msg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!firstName || !lastName || !username || !email || !password) {
      alert("Enter all input fields");
      setLoading(false);
    } else if (password.length < 6) {
      alert("password should be at least 6 characters");
      setLoading(false);
    } else {
      try {
        const user = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
          }
        );

        localStorage.setItem("token", JSON.stringify(user.data.token));
        setMsg("User created successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setUsername("");
        setLoading(false);
      } catch (error) {
        if (
          error.response.data.msg ===
          "Duplicate value entered for username field, please choose another value"
        ) {
          alert("username is taken");
        } else if (
          error.response.data.msg ===
          "Duplicate value entered for email field, please choose another value"
        ) {
          alert("email is taken");
        } else {
          alert(error.response.data.msg);
        }
        setLoading(false);
      }
    }
  };

  const setUser = () => {
    setRegUser(true);
  };

  return (
    <div className="login-conatiner">
      <p className="msg">{Msg}</p>
      <form className=" login-form">
        <h1>Register</h1>

        <div className="input-fields">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="signin-btn" onClick={handleSubmit}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <div className="signin-footer">
        Have an Account?
        <button className="switch-btn" onClick={setUser}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
