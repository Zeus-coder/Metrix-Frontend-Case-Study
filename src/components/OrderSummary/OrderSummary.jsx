/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OrderCard } from "../OrderCard";
import "./style.css";

export const OrderSummary = ({ state, className }) => {
  return (
    <div className={`order-summary ${state} ${className}`}>
      <div className="frame-10">
        <div className="recent-orders">Recent Orders</div>
        <div className="frame-11">
          {state === "plus-data" && (
            <>
              <OrderCard className="order-card-instance" rectangle="/img/rectangle-3-10.png" text="Pending" />
              <OrderCard
                className="order-card-instance"
                frameClassName="frame-12"
                pendingClassName="frame-13"
                rectangle="/img/rectangle-3-14.png"
                text="Completed"
              />
              <OrderCard className="order-card-instance" rectangle="/img/rectangle-3-10.png" text="Pending" />
              <OrderCard
                className="order-card-instance"
                frameClassName="frame-12"
                pendingClassName="frame-13"
                rectangle="/img/rectangle-3-14.png"
                text="Completed"
              />
              <OrderCard
                className="order-card-instance"
                frameClassName="frame-12"
                pendingClassName="frame-13"
                rectangle="/img/rectangle-3-14.png"
                text="Completed"
              />
              <OrderCard
                className="order-card-instance"
                frameClassName="frame-12"
                pendingClassName="frame-13"
                rectangle="/img/rectangle-3-14.png"
                text="Completed"
              />
              <OrderCard className="order-card-instance" rectangle="/img/rectangle-3-10.png" text="Pending" />
              <OrderCard className="order-card-instance" rectangle="/img/rectangle-3-10.png" text="Pending" />
              <OrderCard className="order-card-instance" rectangle="/img/rectangle-3-10.png" text="Pending" />
            </>
          )}

          {state === "empty" && (
            <>
              <div className="icon-container">
                <div className="iconly-bulk-bag">
                  <div className="bag-2">
                    <img className="combined-shape-4" alt="Combined shape" src="/img/combined-shape-8.png" />
                    <img className="path-2" alt="Path" src="/img/path-34167-2.png" />
                  </div>
                </div>
              </div>
              <div className="empty-state-content">
                <div className="description">
                  <div className="no-orders-yet">No Orders Yet?</div>
                  <p className="add-products-to-your">
                    Add products to your store and start selling to see orders here.
                  </p>
                </div>
                <div className="buttons">
                  <div className="label-container">
                    <img className="fi-plus" alt="Fi plus" src="/img/fi-plus.png" />
                    <div className="label">New Product</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  state: PropTypes.oneOf(["plus-data", "empty"]),
};
