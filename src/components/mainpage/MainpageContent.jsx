import sytles from "./MainpageContent.module.css";

function MainpageContent() {
  return (
    <div className={sytles.container}>
      <div className={sytles.circle}>
        <p>login/join</p>
        <p>Cart</p>
        <p>Info</p>
      </div>
      <div className={sytles.title}>
        <h1>my online shop</h1>
      </div>
      <div className={sytles.box}></div>
    </div>
  );
}
export default MainpageContent;
