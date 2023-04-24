import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";
import BillingDetail from "../checkout/checkout";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const items = { name: "Asgaard sofa", quantity: 1, price: 250000 };
  const [cartItems, setCartItems] = useState([items]);
  const [subTotal, setSubTotal] = useState(250000);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setSubTotal(subTotal + item.price);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    setSubTotal(subTotal - item.price);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>{" "}
          <p className={styles.center}>
            <img src={require("./bag.jpg")} alt="" />
          </p>
        </div>
        <div className={styles.border}></div>
        <div>
          <ul>
            {cartItems.map((item) => (
              <li>
                <div>
                  <img src={require("./item1.jpg")} alt="" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.quantity} x Rs.{item.price.toFixed(2)}
                  </p>
                </div>
                <div className={styles.center}>
                  <img
                    src={require("./cancel.jpg")}
                    alt=""
                    onClick={() => removeItemFromCart(item)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.subtotal}>
          <p>Subtotal: </p>
          <p> Rs. {subTotal.toFixed(2)}</p>
        </div>{" "}
        <div className={styles.border}></div>
        <div>
          <button className={styles.cartButtons}>View Cart</button>
          <Link to="/BillingDetail" element={<BillingDetail />}>
            <button className={styles.cartButtons}>Check Out</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
