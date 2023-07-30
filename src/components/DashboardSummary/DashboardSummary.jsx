/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FiChevronDown } from "../FiChevronDown";
import { IconlyLightUser } from "../IconlyLightUser";
import "./style.css";

export const DashboardSummary = ({
  type,
  className,
  iconClassName,
  override = <IconlyLightUser className="iconly-light-2-user" iconlyLightUser="/img/iconly-light-2-user-15.png" />,
  text = "Customers",
  frameClassName,
  text1 = "0",
  hasElement = true,
  text2 = "Active",
  text3 = "+0.00%",
  elementClassName,
  elementClassNameOverride,
  divClassName,
  filterClassName,
  thisWeekClassName,
  fiChevronDownFiChevronDownClassName,
  fiChevronDownFiChevronDown = "/img/fi-chevron-down-18.png",
  customersClassName,
  divClassNameOverride,
  elementClassName1,
  activeClassName,
  elementClassName2,
  elementClassName3,
}) => {
  return (
    <div className={`dashboard-summary ${className}`}>
      <div className="summary-container">
        <div className="summary-heading">
          <div className={`icon-2 ${type} ${iconClassName}`}>
            {type === "single" && <img className="fi-pie-chart" alt="Fi pie chart" src="/img/fi-pie-chart.png" />}

            {["double", "tripple"].includes(type) && <>{override}</>}
          </div>
          <div className={`filter ${filterClassName}`}>
            <div className={`this-week ${thisWeekClassName}`}>This Week</div>
            <FiChevronDown className={fiChevronDownFiChevronDownClassName} fiChevronDown={fiChevronDownFiChevronDown} />
          </div>
        </div>
        <div className={`frame-6 type-${type}`}>
          {["double", "single"].includes(type) && (
            <>
              <div className="total-sales">
                {type === "single" && <>Total Sales</>}

                {type === "double" && (
                  <>
                    <div className={`text-wrapper-5 ${customersClassName}`}>{text}</div>
                    <div className={`frame-7 ${frameClassName}`}>
                      <div className={`element-3 ${divClassNameOverride}`}>{text1}</div>
                      {hasElement && <div className={`element-4 ${elementClassName1}`}>{text3}</div>}
                    </div>
                  </>
                )}
              </div>
              <div className="frame-8">
                <div className={`element-5 ${activeClassName}`}>
                  {type === "single" && <>₦0.00</>}

                  {type === "double" && <>{text2}</>}
                </div>
                <div className="element-6">
                  {type === "single" && <>{text3}</>}

                  {type === "double" && (
                    <>
                      <div className={`element-3 ${elementClassName2}`}>{text1}</div>
                      <div className={`element-4 ${elementClassName3}`}>{text3}</div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}

          {type === "tripple" && (
            <>
              <div className="frame-9">
                <div className="text-wrapper-5">All Orders</div>
                <div className="frame-7">
                  <div className="element-3">{text1}</div>
                  <div className={`element-4 ${elementClassName}`}>{text3}</div>
                </div>
              </div>
              <div className="frame-9">
                <div className="text-wrapper-5">Pending</div>
                <div className="frame-7">
                  <div className="element-3">{text1}</div>
                  <div className={`element-4 ${elementClassNameOverride}`}>{text3}</div>
                </div>
              </div>
              <div className="frame-9">
                <div className="text-wrapper-5">Completed</div>
                <div className="frame-7">
                  <div className="element-3">{text1}</div>
                  <div className={`element-4 ${divClassName}`}>{text3}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

DashboardSummary.propTypes = {
  type: PropTypes.oneOf(["double", "single", "tripple"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  hasElement: PropTypes.bool,
  text2: PropTypes.string,
  text3: PropTypes.string,
  fiChevronDownFiChevronDown: PropTypes.string,
};
