import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCardItems = cartCtx.items.reduce((curNumber, list) => {
    return curNumber + list;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <spam className={classes.icon}>
        <CartIcon />
      </spam>
      <spam>Your Cart</spam>
      <spam className={classes.badge}>{numberOfCardItems}</spam>
    </button>
  );
};
export default HeaderCardButton;
