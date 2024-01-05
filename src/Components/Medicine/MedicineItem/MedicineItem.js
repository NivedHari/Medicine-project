import { useContext, useState } from "react";
import classes from "./MedicineItem.module.css";
import MedicineItemForm from "./MedicineItemForm";
import CartContext from "../../store/cart-context";

const MedicineItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(props.quantity);
  // const price = `$${props.price.toFixed(2)}`;

  const cartItem = cartCtx.items.find((item) => item.id === props.id);

  const addToCartHandler = (amount) => {
    if (quantity < 1) {
      return;
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: +props.price,
    });
    setQuantity((prev) => prev - amount);
    console.log(props.id, props.name, amount, props.price);
  };

  return (
    <li className={classes.meds}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price} Rs</div>
        <div className={classes.amount}>Quantity Available: {quantity}</div>
      </div>
      <div>
        {quantity < 1 ? (
          <p>Out Of Stock</p>
        ) : (
          <MedicineItemForm onAddToCart={addToCartHandler} />
        )}
      </div>
    </li>
  );
};

export default MedicineItem;
