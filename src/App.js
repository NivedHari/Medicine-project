import React, { useState, Fragment, useContext } from "react";
import Header from "./Components/Layout/Header";
import MedicineManagement from "./Components/Medicine/MedicineManagement";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MedicineManagement />
      </main>
    </CartProvider>
  );
}

export default App;
