import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartItems = [{ name: "Sushi" }].map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes.cartItems}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
