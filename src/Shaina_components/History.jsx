import axios from "axios";
import React, { useEffect, useState } from "react";

function History() {
  const email = localStorage.getItem("email");
  const [result, setResult] = useState([]);
  const fetchHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/book/${email}`);
      console.log("response history :", response.data);
      setResult(response.data);
    } catch (error) {
      console.log("error in history frontend", error.message);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <div>
      {result.map((item) => {
        return (
          <div className="history-container" key={item._id}>
            <p>Name : {item.name}</p>
            <p>email : {item.email}</p>
            <p>Duration : {item.num}</p>
            <p>Type : {item.duration}</p>
            <p>Cost : {item.cost}</p>
            <p>Booking date : {new Date(item.createdAt).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
