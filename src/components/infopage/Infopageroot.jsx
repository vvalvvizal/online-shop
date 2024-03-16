import React, { useState, useEffect } from "react";
import axios from "axios";

function InfoPage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        console.log(response.data); // 받은 데이터 확인
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return <div> info 페이지</div>;
}

export default InfoPage;
