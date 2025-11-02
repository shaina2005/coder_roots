import axios from "axios";
import React, { useState } from "react";

function Bookroom() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState({});

  const bookroom = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/book", {
        email,
        name,
        num,
        duration,
      });
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log("error in bookroom frontend :", error.message);
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
        <legend>Book room</legend>
        <span>Email : </span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <span>Time :</span>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br></br>
        <span> Duration :</span>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">--choose--</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
        </select>
        <br></br>
        <button onClick={bookroom}>Book room</button>
      </form>
    </div>
  );
}

export default Bookroom;
