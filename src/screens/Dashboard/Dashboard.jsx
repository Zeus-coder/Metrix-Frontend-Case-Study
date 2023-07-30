import React from "react";
import { BarChart } from "../../components/BarChart";
import { DashboardSummary } from "../../components/DashboardSummary";
import { FiChevronDown } from "../../components/FiChevronDown";
import { FiShoppingCart } from "../../components/FiShoppingCart";
import { IconlyLightBag } from "../../components/IconlyLightBag";
import { IconlyLightFolder } from "../../components/IconlyLightFolder";
import { IconlyLightGraph } from "../../components/IconlyLightGraph";
import { IconlyLightUser } from "../../components/IconlyLightUser";
import { OrderSummary } from "../../components/OrderSummary";
import { SideBar } from "../../components/SideBar";
import { TopNav } from "../../components/TopNav";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-5">
        <SideBar
          className="side-bar-instance"
          fiHeadphonesFiHeadphonesClassName="side-bar-2"
          menuItem="dashboard"
          open
        />
        <div className="main-container">
          <TopNav
            className="top-nav-instance"
            divClassName="design-component-instance-node-2"
            divClassNameOverride="design-component-instance-node-2"
            itemClassName="design-component-instance-node-2"
            itemClassNameOverride="design-component-instance-node-2"
          />
          <div className="container-3">
            <div className="frame-14">
              <DashboardSummary
                className="dashboard-summary-card"
                frameClassName="dashboard-summary-card-instance"
                hasElement={false}
                iconClassName="dashboard-summary-instance"
                override={
                  <IconlyLightGraph
                    className="design-component-instance-node-3"
                    iconlyLightGraph="/img/iconly-light-graph.png"
                  />
                }
                text="Sales"
                text1="450"
                text2="Volume"
                text3="+20.00%"
                type="double"
              />
              <DashboardSummary
                className="dashboard-summary-card"
                override={
                  <IconlyLightUser
                    className="design-component-instance-node-3"
                    iconlyLightUser="/img/iconly-light-2-user-15.png"
                  />
                }
                text="Customers"
                text1="1,180"
                text2="Active"
                text3="85%"
                type="double"
              />
              <DashboardSummary
                className="design-component-instance-node-4"
                divClassName="design-component-instance-node-2"
                elementClassName="design-component-instance-node-2"
                elementClassNameOverride="design-component-instance-node-2"
                override={
                  <IconlyLightBag
                    className="design-component-instance-node-3"
                    iconlyLightBag="/img/iconly-light-bag-15.png"
                  />
                }
                text1="445"
                text3="+0.00%"
                type="tripple"
              />
            </div>
            <div className="main-content">
              <div className="left">
                <div className="top-3">
                  <BarChart className="bar-chart-instance" state="plus-data" />
                  <div className="right">
                    <DashboardSummary
                      activeClassName="dashboard-summary-2"
                      className="dashboard-summary-4"
                      customersClassName="dashboard-summary-2"
                      divClassNameOverride="dashboard-summary-2"
                      elementClassName1="dashboard-summary-3"
                      elementClassName2="dashboard-summary-2"
                      elementClassName3="iconly-light-folder-wrapper"
                      fiChevronDownFiChevronDown="/img/fi-chevron-down-3.png"
                      fiChevronDownFiChevronDownClassName="iconly-light-folder-instance-wrapper"
                      filterClassName="design-component-instance-node-2"
                      iconClassName="dashboard-summary-5"
                      override={
                        <IconlyLightFolder
                          className="design-component-instance-node-3"
                          iconlyLightFolder="/img/iconly-light-folder.png"
                        />
                      }
                      text="All Products"
                      text1="32"
                      text2="Active"
                      text3="+24%"
                      thisWeekClassName="iconly-light-folder-wrapper"
                      type="double"
                    />
                    <DashboardSummary
                      className="fi-shopping-cart-wrapper"
                      customersClassName="fi-shopping-cart-instance-wrapper"
                      elementClassName3="design-component-instance-node-2"
                      fiChevronDownFiChevronDown="/img/fi-chevron-down-18.png"
                      fiChevronDownFiChevronDownClassName="design-component-instance-node-5"
                      override={
                        <FiShoppingCart
                          className="design-component-instance-node-3"
                          fiShoppingCart="/img/fi-shopping-cart.png"
                        />
                      }
                      text="Abandoned Cart"
                      text1="30"
                      text2="Customers"
                      text3="+0.00%"
                      type="double"
                    />
                  </div>
                </div>
                <div className="chart-wrapper">
                  <div className="chart">
                    <div className="summary-heading-2">
                      <div className="frame-15">
                        <div className="text-wrapper-7">Summary</div>
                        <div className="icon-3">
                          <div className="frame-16">
                            <div className="text-wrapper-8">Sales</div>
                            <FiChevronDown className="fi-chevron-down-3" fiChevronDown="/img/fi-chevron-down-1.png" />
                          </div>
                        </div>
                      </div>
                      <div className="filter-3">
                        <div className="text-wrapper-9">Last 7 Days</div>
                        <FiChevronDown
                          className="design-component-instance-node-5"
                          fiChevronDown="/img/fi-chevron-down.png"
                        />
                      </div>
                    </div>
                    <div className="graph-bar">
                      <div className="x-axis">
                        <div className="text-wrapper-10">100k</div>
                        <div className="text-wrapper-11">80k</div>
                        <div className="text-wrapper-11">60k</div>
                        <div className="text-wrapper-11">40k</div>
                        <div className="text-wrapper-11">20k</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-5" />
                        </div>
                        <div className="text-wrapper-12">Sept 10</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-6" />
                        </div>
                        <div className="text-wrapper-12">Sept 11</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-7" />
                        </div>
                        <div className="text-wrapper-12">Sept 12</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-8" />
                        </div>
                        <div className="text-wrapper-12">Sept 13</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-9" />
                        </div>
                        <div className="text-wrapper-12">Sept 14</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-10" />
                        </div>
                        <div className="text-wrapper-12">Sept 15</div>
                      </div>
                      <div className="bar">
                        <div className="rectangle-wrapper">
                          <div className="rectangle-9" />
                        </div>
                        <div className="text-wrapper-12">Sept 16</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <OrderSummary className="design-component-instance-node-4" state="plus-data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
