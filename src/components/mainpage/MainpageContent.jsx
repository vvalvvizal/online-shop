import sytles from "./MainpageContent.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function MainpageContent() {
  return (
    <BrowserRouter>
      <div className={sytles.container}>
        <div className={sytles.circle}>
          <Link to="/login">Login/Join</Link>
          <p>Cart</p>
          <p>Info</p>
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
    </BrowserRouter>
  );
}
export default MainpageContent;
