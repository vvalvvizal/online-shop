import { useState, useEffect } from "react";
import axios from "axios";
import DetailpageContent from "./DetailpageContent";
function Detailpageroot() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cart");
        console.log(response.data); // 받은 데이터 확인
        setItems(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DetailpageContent items={items} />
    </div>
  );
}

export default Detailpageroot;
