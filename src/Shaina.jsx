import React, { useState } from "react";
import Navbar from "./Shaina_components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Shaina_components/Login";
import Register from "./Shaina_components/Register";
import "./App.css";
import Dashboard from "./Shaina_components/Dashboard";
import Bookroom from "./Shaina_components/Bookroom";
import History from "./Shaina_components/History";

function Shaina() {
  const [isLogin, setIsLogin] = useState(() => {
    const exists = localStorage.getItem("isLogin");
    return exists === "true" ? true : false;
  });
  const [username, setusername] = useState(() => {
    // const user = localStorage.getItem("username");
    // return user && user.trim() != "" ? user : "Guest";
    return "testing eror";
  });

  const [emailLogin, setEmailLogin] = useState(() => {
    const e = localStorage.getItem("email");
    console.log("e:", e);

    return e || "";
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar isLogin={isLogin} />
        <Routes>
          {isLogin && (
            <>
              <Route
                path="/dashboard"
                element={
                  <Dashboard setIsLogin={setIsLogin} username={username} />
                }
              />

              <Route
                path="*"
                element={
                  <Dashboard setIsLogin={setIsLogin} username={username} />
                }
              />

              <Route
                path="/bookroom"
                element={<Bookroom emailLogin={emailLogin} />}
              />

              <Route path="/history" element={<History />} />
            </>
          )}

          {!isLogin && (
            <>
              <Route
                path="/"
                element={
                  <Login
                    setIsLogin={setIsLogin}
                    setusername={setusername}
                    setEmailLogin={setEmailLogin}
                  />
                }
              />

              <Route path="/shainaregister" element={<Register />} />
              <Route
                path="*"
                element={
                  <Login
                    setIsLogin={setIsLogin}
                    setusername={setusername}
                    setEmailLogin={setEmailLogin}
                  />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Shaina;
