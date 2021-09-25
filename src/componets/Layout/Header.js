import { Fragment } from "react";
import Classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCartHandler} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealImage} alt="a table" />
      </div>
    </Fragment>
  );
};
export default Header;
