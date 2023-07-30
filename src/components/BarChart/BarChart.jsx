/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FiChevronDown } from "../FiChevronDown";
import "./style.css";

export const BarChart = ({ state, className }) => {
  return (
    <div className={`bar-chart ${className}`}>
      <div className="content">
        <div className="top">
          <div className="div-4">
            <div className="marketting">Marketting</div>
            <div className="filter-2">
              <div className="this-week-2">This Week</div>
              <FiChevronDown className="fi-chevron-down-2" fiChevronDown="/img/fi-chevron-down-18.png" />
            </div>
          </div>
          <div className="div-4">
            <div className="key">
              <div className="rectangle" />
              <div className="text-wrapper-6">Acquisition</div>
            </div>
            <div className="key">
              <div className="rectangle-2" />
              <div className="text-wrapper-6">Purchase</div>
            </div>
            <div className="key">
              <div className="rectangle-3" />
              <div className="text-wrapper-6">Retention</div>
            </div>
          </div>
        </div>
        <div className="group-2">
          {state === "plus-data" && (
            <div className="overlap-group-5">
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-3-1.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-4-1.png" />
              <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-2-1.png" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BarChart.propTypes = {
  state: PropTypes.oneOf(["plus-data", "empty"]),
};
