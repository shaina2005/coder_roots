import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("register");

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      setResult(response.data);
      if (response.data.color === "green") {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log("error in handleRegister frontend: ", error.message);
    }
  };
  return (
    <div>
      <div>
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
              style={{
                color: result.color,
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {result.message}
            </div>
          )}

          <form className="form">
            <legend>Register page</legend>
            <span>Name : </span>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <span>Email : </span>
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <span>Password :</span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button onClick={handleRegister}> Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
