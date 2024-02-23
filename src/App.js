import "./App.css";
import MainpageContent from "./components/mainpage/MainpageContent";
import React, { useState, useEffect } from "react";
const PORT = 3001;

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="App">
      <MainpageContent />
    </div>
  );
}

export default App;
