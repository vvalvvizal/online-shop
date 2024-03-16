import "./App.css";
import Mainpage from "./components/mainpage/Mainpageroot";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./components/loginpage/Loginpageroot";
import CartPage from "./components/detailpage/Detailpageroot";
import InfoPage from "./components/infopage/Infopageroot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
