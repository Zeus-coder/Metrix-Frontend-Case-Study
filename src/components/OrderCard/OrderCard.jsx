/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OrderCard = ({
  className,
  rectangle = "/img/rectangle-3-10.png",
  frameClassName,
  pendingClassName,
  text = "Pending",
}) => {
  return (
    <div className={`order-card ${className}`}>
      <div className="container-2">
        <img className="rectangle-4" alt="Rectangle" src={rectangle} />
        <div className="content-2">
          <div className="top-2">
            <div className="iphone">iPhone 13</div>
            <div className="div-wrapper-2">
              <div className="element-sept">12 Sept 2022</div>
            </div>
          </div>
          <div className="bottom-2">
            <div className="div-wrapper-2">
              <div className="element-x">₦730,000.00 x 1</div>
            </div>
            <div className={`pending-wrapper ${frameClassName}`}>
              <div className={`pending ${pendingClassName}`}>{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
};
