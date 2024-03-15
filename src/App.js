import "./App.css";
import MainpageContent from "./components/mainpage/MainpageContent";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./components/loginpage/Loginpageroot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        console.log(response.data); // 받은 데이터 확인
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainpageContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
