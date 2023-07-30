/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FiChevronDown } from "../FiChevronDown";
import { FiGift } from "../FiGift";
import { FiHeadphones } from "../FiHeadphones";
import { IconlyBulkCategory } from "../IconlyBulkCategory";
import { IconlyBulkLogout } from "../IconlyBulkLogout";
import { IconlyLightBag } from "../IconlyLightBag";
import { IconlyLightChat } from "../IconlyLightChat";
import { IconlyLightFolder } from "../IconlyLightFolder";
import { IconlyLightSetting } from "../IconlyLightSetting";
import { IconlyLightUser } from "../IconlyLightUser";
import "./style.css";

export const SideBar = ({ menuItem, open, className, fiHeadphonesFiHeadphonesClassName }) => {
  return (
    <div className={`side-bar open-${open} ${className}`}>
      <div className="logo">
        {open && (
          <>
            <div className="group" />
            <div className="metrix">Metrix</div>
          </>
        )}
      </div>
      <div className="menu-items">
        {["conversations", "customers", "dashboard", "inventory", "orders", "settings"].includes(menuItem) && (
          <>
            <div className={`active open-2-${open} menu-item-${menuItem}`}>
              {menuItem === "dashboard" && (
                <div className="inner-container">
                  <IconlyBulkCategory
                    className="img"
                    combinedShape="/img/combined-shape-4.png"
                    fill="/img/fill-1-4.png"
                  />
                  {open && <div className="text-wrapper">Dashboard</div>}
                </div>
              )}

              {((menuItem === "conversations" && open) ||
                (menuItem === "customers" && open) ||
                (menuItem === "inventory" && open) ||
                (menuItem === "orders" && open) ||
                (menuItem === "settings" && open)) && (
                <>
                  <img className="img" alt="Iconly light" src="/img/iconly-light-category.png" />
                  <div className="div">Dashboard</div>
                </>
              )}

              {((menuItem === "conversations" && !open) ||
                (menuItem === "customers" && !open) ||
                (menuItem === "inventory" && !open) ||
                (menuItem === "orders" && !open) ||
                (menuItem === "settings" && !open)) && (
                <img className="iconly-light" alt="Iconly light" src="/img/iconly-light-category.png" />
              )}
            </div>
            <div className={`menu-item open-4-${open} menu-item-0-${menuItem}`}>
              {((menuItem === "conversations" && open) ||
                (menuItem === "customers" && open) ||
                (menuItem === "dashboard" && open) ||
                (menuItem === "inventory" && open) ||
                (menuItem === "settings" && open)) && (
                <>
                  <IconlyLightBag className="instance-node" iconlyLightBag="/img/iconly-light-bag-2.png" />
                  <div className="div">Orders</div>
                  <div className="frame">
                    <div className="element">3</div>
                  </div>
                </>
              )}

              {(!open || menuItem === "orders") && (
                <div className="menu-item-2">
                  {open && (
                    <>
                      <div className="img">
                        <div className="bag">
                          <img className="combined-shape-2" alt="Combined shape" src="/img/combined-shape-5.png" />
                          <img className="path" alt="Path" src="/img/path-34167.png" />
                        </div>
                      </div>
                      <div className="text-wrapper-2">Orders</div>
                      <div className="element-wrapper">
                        <div className="element">3</div>
                      </div>
                    </>
                  )}

                  {!open && menuItem === "orders" && (
                    <div className="bag">
                      <img className="combined-shape-2" alt="Combined shape" src="/img/combined-shape-5.png" />
                      <img className="path" alt="Path" src="/img/path-34167.png" />
                    </div>
                  )}

                  {["conversations", "customers", "dashboard", "inventory", "settings"].includes(menuItem) && (
                    <>
                      <IconlyLightBag className="instance-node-2" iconlyLightBag="/img/iconly-light-bag-2.png" />
                      <div className="div-wrapper">
                        <div className="element">3</div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className={`menu-item-3 open-6-${open} menu-item-2-${menuItem}`}>
              {["conversations", "dashboard", "inventory", "orders", "settings"].includes(menuItem) && (
                <IconlyLightUser
                  className={`${open ? "instance-node" : "class"}`}
                  iconlyLightUser="/img/iconly-light-2-user-2.png"
                />
              )}

              {((menuItem === "conversations" && open) ||
                (menuItem === "dashboard" && open) ||
                (menuItem === "inventory" && open) ||
                (menuItem === "orders" && open) ||
                (menuItem === "settings" && open)) && <div className="div">Customers</div>}

              {!open && menuItem === "customers" && (
                <img className="img-2" alt="Iconly bulk user" src="/img/iconly-bulk-2-user.png" />
              )}

              {menuItem === "customers" && open && (
                <div className="menu-item-4">
                  <img className="img" alt="Iconly bulk user" src="/img/iconly-bulk-2-user.png" />
                  <div className="text-wrapper-2">Customers</div>
                </div>
              )}
            </div>
            <div className={`menu-item-5 menu-item-3-${menuItem} open-7-${open}`}>
              {["conversations", "customers", "dashboard", "orders", "settings"].includes(menuItem) && (
                <IconlyLightFolder
                  className={`${open ? "instance-node" : "class"}`}
                  iconlyLightFolder="/img/iconly-light-folder-2.png"
                />
              )}

              {((menuItem === "conversations" && open) ||
                (menuItem === "customers" && open) ||
                (menuItem === "dashboard" && open) ||
                (menuItem === "orders" && open) ||
                (menuItem === "settings" && open)) && <div className="div">Inventory</div>}

              {menuItem === "inventory" && (
                <div className="menu-item-6">
                  {open && (
                    <>
                      <div className="img">
                        <div className="folder">
                          <div className="overlap-group-2">
                            <img className="folder-2" alt="Folder" src="/img/folder-2.png" />
                            <img className="folder-3" alt="Folder" src="/img/folder.png" />
                          </div>
                        </div>
                      </div>
                      <div className="text-wrapper-2">Inventory</div>
                    </>
                  )}

                  {!open && (
                    <div className="folder">
                      <div className="overlap-group-2">
                        <img className="folder-2" alt="Folder" src="/img/folder-2.png" />
                        <img className="folder-3" alt="Folder" src="/img/folder.png" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className={`menu-item-7 open-9-${open} menu-item-4-${menuItem}`}>
              {((menuItem === "customers" && open) ||
                (menuItem === "dashboard" && open) ||
                (menuItem === "inventory" && open) ||
                (menuItem === "orders" && open) ||
                (menuItem === "settings" && open)) && (
                <>
                  <IconlyLightChat className="instance-node" iconlyLightChat="/img/iconly-light-chat-2.png" />
                  <div className="div">Conversations</div>
                  <div className="frame">
                    <div className="element-2">16</div>
                  </div>
                </>
              )}

              {(!open || menuItem === "conversations") && (
                <div className="overlap-group-3">
                  {["customers", "dashboard", "inventory", "orders", "settings"].includes(menuItem) && (
                    <>
                      <div className="div-wrapper">
                        <div className="element-2">16</div>
                      </div>
                      <IconlyLightChat className="instance-node-2" iconlyLightChat="/img/iconly-light-chat-2.png" />
                    </>
                  )}

                  {open && (
                    <>
                      <div className="img">
                        <div className="chat">
                          <img className="combined-shape-3" alt="Combined shape" src="/img/combined-shape-2.png" />
                        </div>
                      </div>
                      <div className="text-wrapper-2">Conversations</div>
                    </>
                  )}

                  {menuItem === "conversations" && !open && (
                    <div className="chat">
                      <img className="combined-shape-3" alt="Combined shape" src="/img/combined-shape-2.png" />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className={`menu-item-8 open-11-${open} menu-item-6-${menuItem}`}>
              {["conversations", "customers", "dashboard", "inventory", "orders"].includes(menuItem) && (
                <IconlyLightSetting
                  className={`${open ? "instance-node" : "class"}`}
                  iconlyLightSetting="/img/iconly-light-setting-2.png"
                />
              )}

              {((menuItem === "conversations" && open) ||
                (menuItem === "customers" && open) ||
                (menuItem === "dashboard" && open) ||
                (menuItem === "inventory" && open) ||
                (menuItem === "orders" && open)) && <div className="div">Settings</div>}

              {menuItem === "settings" && !open && (
                <img className="img-2" alt="Iconly bulk setting" src="/img/iconly-bulk-setting.png" />
              )}

              {menuItem === "settings" && open && (
                <div className="menu-item-9">
                  <img className="img" alt="Iconly bulk setting" src="/img/iconly-bulk-setting.png" />
                  <div className="text-wrapper-2">Settings</div>
                </div>
              )}
            </div>
          </>
        )}

        {menuItem === "marketting" && (
          <>
            <div className="active-2">
              {!open && <img className="iconly-light" alt="Iconly light" src="/img/iconly-light-category.png" />}

              {open && (
                <>
                  <img className="img" alt="Iconly light" src="/img/iconly-light-category.png" />
                  <div className="div">Dashboard</div>
                </>
              )}
            </div>
            <div className="active-3">
              {!open && (
                <div className="overlap-group-4">
                  <IconlyLightBag className="instance-node-2" iconlyLightBag="/img/iconly-light-bag-2.png" />
                  <div className="div-wrapper">
                    <div className="element">3</div>
                  </div>
                </div>
              )}

              {open && (
                <>
                  <IconlyLightBag className="instance-node" iconlyLightBag="/img/iconly-light-bag-2.png" />
                  <div className="div">Orders</div>
                  <div className="frame">
                    <div className="element">3</div>
                  </div>
                </>
              )}
            </div>
            <div className="active-4">
              <IconlyLightUser
                className={`${!open ? "class" : "instance-node"}`}
                iconlyLightUser="/img/iconly-light-2-user-2.png"
              />
              {open && <div className="div">Customers</div>}
            </div>
            <div className="active-5">
              <IconlyLightFolder
                className={`${!open ? "class" : "instance-node"}`}
                iconlyLightFolder="/img/iconly-light-folder-2.png"
              />
              {open && <div className="div">Inventory</div>}
            </div>
            <div className="active-6">
              {!open && (
                <div className="overlap-group-4">
                  <div className="div-wrapper">
                    <div className="element-2">16</div>
                  </div>
                  <IconlyLightChat className="instance-node-2" iconlyLightChat="/img/iconly-light-chat-2.png" />
                </div>
              )}

              {open && (
                <>
                  <IconlyLightChat className="instance-node" iconlyLightChat="/img/iconly-light-chat-2.png" />
                  <div className="div">Conversations</div>
                  <div className="frame">
                    <div className="element-2">16</div>
                  </div>
                </>
              )}
            </div>
            <div className="active-7">
              {!open && <img className="img-2" alt="Iconly bulk chart" src="/img/iconly-bulk-chart.png" />}

              {open && (
                <div className="menu-item-10">
                  <img className="img" alt="Iconly bulk chart" src="/img/iconly-bulk-chart.png" />
                  <div className="text-wrapper-2">Marketting</div>
                </div>
              )}
            </div>
            <div className="active-8">
              <IconlyLightSetting
                className={`${!open ? "class" : "instance-node"}`}
                iconlyLightSetting="/img/iconly-light-setting-2.png"
              />
              {open && <div className="div">Settings</div>}
            </div>
          </>
        )}
      </div>
      <div className="bottom">
        <div className="logout">
          <div className="frame-2">
            <IconlyBulkLogout className="instance-node" iconlyBulkLogout="/img/iconly-bulk-logout-2.png" />
            {open && <div className="logout-2">Logout</div>}
          </div>
        </div>
        {open && (
          <div className="frame-wrapper">
            <div className="frame-2">
              <FiHeadphones className={fiHeadphonesFiHeadphonesClassName} fiHeadphones="/img/fi-headphones-4.png" />
              <div className="text-wrapper-3">Support</div>
            </div>
          </div>
        )}
      </div>
      <div className="banner">
        <div className="container">
          <div className="frame-3">
            <FiGift className="instance-node-3" />
            {open && <div className="free-gift-awaits-you">Free Gift Awaits You!</div>}
          </div>
          {open && (
            <div className="frame-4">
              <div className="upgrade-your-account">Upgrade your account</div>
              <FiChevronDown className="fi-chevron-down-instance" fiChevronDown="/img/fi-chevron-down-10.png" />
            </div>
          )}
        </div>
      </div>
      <div className="logout-3">
        <div className="frame-5">
          <FiHeadphones className="instance-node-3" fiHeadphones="/img/fi-headphones-2.png" />
          {open && <div className="text-wrapper-3">Contact Support</div>}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  menuItem: PropTypes.oneOf([
    "dashboard",
    "marketting",
    "customers",
    "inventory",
    "conversations",
    "orders",
    "settings",
  ]),
  open: PropTypes.bool,
};
