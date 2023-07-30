/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FiShoppingCart = ({ className, fiShoppingCart = "/img/fi-shopping-cart-1.png" }) => {
  return <img className={`fi-shopping-cart ${className}`} alt="Fi shopping cart" src={fiShoppingCart} />;
};

FiShoppingCart.propTypes = {
  fiShoppingCart: PropTypes.string,
};
