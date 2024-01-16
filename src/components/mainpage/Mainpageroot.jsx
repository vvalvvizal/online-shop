import { useState, useEffect } from "react";
import MainpageConent from "./MainpageContent";
function Mainpageroot() {
  const [userID, setuserID] = useState([]);

  return (
    <div>
      <MainpageConent />
    </div>
  );
}

export default Mainpageroot;
