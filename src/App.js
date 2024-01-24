import "./App.css";
import MainpageContent from "./components/mainpage/MainpageContent";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api")
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
