import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin, setusername, setEmailLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: email.trim().toLowerCase(),
        password,
      });
      setResult(res.data);
      console.log(res.data);

      if (res.data.status === true) {
        console.log("succesfull shaina login");
        setIsLogin(true);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", res.data.user.name);
        setusername(res.data.user.name);
        setEmailLogin(res.data.user.email);
        localStorage.setItem("email", res.data.user.email);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error in handleLogin frontend:", error.message);
      // setResult({ message: " User doesnt exist Register first", color: "red" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {result && (
        <div
          style={{ color: result.color, fontSize: "20px", textAlign: "center" }}
        >
          {result.message}
        </div>
      )}
      <form className="form">
        <legend> Shaina Login page</legend>
        <span>Email : </span>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <span>Password :</span>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}> Login</button>
      </form>
    </div>
  );
}

export default Login;
