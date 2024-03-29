import sytles from "./MainpageContent.module.css";
import { Link } from "react-router-dom";
function MainpageContent() {
  return (
    <div className={sytles.container}>
      <div className={sytles.circle}>
        <p>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login/Join
          </Link>
        </p>
        <p>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            Cart
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/info" style={{ textDecoration: "none", color: "inherit" }}>
            Info
          </Link>
        </p>
      </div>
      <div className={sytles.title}>
        <h1>my online shop </h1>
      </div>
      <div className={sytles.box}>
        <div className={sytles["box-img1"]}></div>
        <div className={sytles["box-img2"]}></div>
        <div className={sytles["box-img3"]}></div>
      </div>
    </div>
  );
}
export default MainpageContent;
