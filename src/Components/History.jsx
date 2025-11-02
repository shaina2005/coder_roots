import axios from "axios";
import React, { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://coder-roots.onrender.com/book/");
      setBookings(response.data);
    } catch (error) {
      console.log("Error fetching bookings:", error.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking History</h2>
      {bookings.map((item) => (
        <div
          key={item._id}
          className="history-container"
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <p>Booking date: {new Date(item.updatedAt).toLocaleString()}</p>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Time: {item.num}</p>
          <p>Duration: {item.duration}</p>
          <p>Total Cost: ₹{item.cost}</p>
        </div>
      ))}
    </div>
  );
}

export default History;
