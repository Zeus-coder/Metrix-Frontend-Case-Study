/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FiChevronDown } from "../FiChevronDown";
import { IconlyBulk } from "../IconlyBulk";
import { IconlyBulkHome } from "../IconlyBulkHome";
import "./style.css";

export const TopNav = ({ className, itemClassName, itemClassNameOverride, divClassName, divClassNameOverride }) => {
  return (
    <div className={`top-nav ${className}`}>
      <div className="nav-container-wrapper">
        <div className="nav-container">
          <div className="dashboard-2">Dashboard</div>
          <div className="div-2">
            <div className="icon">
              <div className="div-2">
                <div className="nanny-s-shop">Nanny’s Shop</div>
                <FiChevronDown className="design-component-instance-node" fiChevronDown="/img/fi-chevron-down-17.png" />
              </div>
            </div>
            <IconlyBulk className="design-component-instance-node" iconlyBulk="/img/iconly-bulk-notification-2.png" />
            <img className="profile" alt="Profile" src="/img/profile-1-1.png" />
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="div-3">
          <IconlyBulkHome className="iconly-bulk-home-instance" iconlyBulkHome="/img/iconly-bulk-home-2.png" />
          <div className={`div-3 ${itemClassName}`}>
            <div className="text-wrapper-4">/</div>
            <div className="text-wrapper-4">Page</div>
          </div>
          <div className={`div-3 ${itemClassNameOverride}`}>
            <div className="text-wrapper-4">/</div>
            <div className="text-wrapper-4">Page</div>
          </div>
          <div className={`div-3 ${divClassName}`}>
            <div className="text-wrapper-4">/</div>
            <div className="text-wrapper-4">Page</div>
          </div>
          <div className={`div-3 ${divClassNameOverride}`}>
            <div className="text-wrapper-4">/</div>
            <div className="text-wrapper-4">Page</div>
          </div>
        </div>
      </div>
    </div>
  );
};
