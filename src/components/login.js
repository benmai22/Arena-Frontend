import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function Login({ setRegUser }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [Msg, setMsg] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [Msg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await axios.post("http://localhost:5000/api/v1/auth/login", {
        data: data,
        password: password,
      });
      console.log(user);
      localStorage.setItem("token", JSON.stringify(user.data.token));

      setMsg("Login successful");
      setLoading(false);
      navigate("/user");
    } catch (error) {
      setLoading(false);
      alert(error.response.data.msg);
    }
  };

  const setUser = () => {
    setRegUser(false);
  };

  return (
    <div className="login-conatiner">
      <p className="msg">{Msg}</p>
      <form className="login-form">
        <h1>Sign In</h1>

        <div className="input-fields">
          <div className="input">
            <FaUserAlt className="icons" />
            <input
              type="text"
              placeholder="username or email"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="input">
            <RiLockPasswordLine className="icons" />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="signin-btn" onClick={handleSubmit}>
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="signin-footer">
        New here?
        <button className="switch-btn" onClick={setUser}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
