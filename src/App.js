import React, { useState } from "react";
import Cart from "./componets/Cart/Cart";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import CartProvider from "./componets/store/CartProvide";

function App() {
  const [cartShow, setCardShow] = useState(false);
  const cartShowHandler = () => {
    setCardShow(true);
  };
  const cartCloseHandler = () => {
    setCardShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onCloseCartHandler={cartCloseHandler} />}
      <Header onShowCartHandler={cartShowHandler} />
      <menu>
        <Meals />
      </menu>
    </CartProvider>
  );
}

export default App;
