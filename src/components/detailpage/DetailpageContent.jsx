import { useEffect, useState } from "react";
import styles from "./DetailpageContent.module.css";
const DeatilpageContent = ({ items }) => {
  let [modal, setModal] = useState(false);

  return (
    <div>
      <h1>My Cart</h1>
      <div className={styles.container}>
        <p>상품</p>
        <div className={styles.items}>
          {items?.map((item) => (
            <div className={styles.item}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeatilpageContent;
