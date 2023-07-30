/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyBulkCategory = ({
  className,
  fill = "/img/fill-1-1.png",
  combinedShape = "/img/combined-shape-1.png",
}) => {
  return (
    <div className={`iconly-bulk-category ${className}`}>
      <div className="category">
        <div className="overlap-group">
          <img className="fill" alt="Fill" src={fill} />
          <img className="combined-shape" alt="Combined shape" src={combinedShape} />
        </div>
      </div>
    </div>
  );
};

IconlyBulkCategory.propTypes = {
  fill: PropTypes.string,
  combinedShape: PropTypes.string,
};
