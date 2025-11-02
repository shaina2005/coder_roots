import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Bookroom from "./Components/Bookroom";
import History from "./Components/History";

function App() {
  const [isLogin, setIslogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Login setIslogin={setIslogin} />} />
          <Route path="/login" element={<Login setIslogin={setIslogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/book"
            element={isLogin ? <Bookroom /> : <Login setIslogin={setIslogin} />}
          />
          <Route
            path="/history"
            element={isLogin ? <History /> : <Login setIslogin={setIslogin} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
