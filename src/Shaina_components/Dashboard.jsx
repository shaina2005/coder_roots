import React from "react";

function Dashboard({ setIsLogin, username }) {
  return (
    <div>
      <div>Greetings : {username}</div>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </div>
  );
}

export default Dashboard;
