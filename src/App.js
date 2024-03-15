import "./App.css";
import MainpageContent from "./components/mainpage/MainpageContent";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <MainpageContent />
    </div>
  );
}

export default App;
