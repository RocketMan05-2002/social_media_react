import React, { useState } from "react";
import "./sidebar.css";
import { sidebarLinks, friends } from "../../utils/utils";
import { blue } from "@mui/material/colors";

const Sidebar = () => {
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const [showMoreToggle2, setShowMoreToggle2] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {showMoreToggle
            ? sidebarLinks.map((item) => {
                return (
                  <li key={item.id} className="sidebarListItem">
                    {item.icon}
                    <span className="sidebarListItemText">{item.name}</span>
                  </li>
                );
              })
            : sidebarLinks.slice(0, -4).map((item) => {
                return (
                  <li key={item.id} className="sidebarListItem">
                    {item.icon}
                    <span className="sidebarListItemText">{item.name}</span>
                  </li>
                );
              })}
        </ul>
        <button
          className="sidebarButton"
          onClick={() => setShowMoreToggle(!showMoreToggle)}
        >
          {showMoreToggle ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" />
        <h3 style={{ marginBottom: 10, color: "#1877f2" }}>Friends</h3>
        <ul className="sidebarFriendList">
          {showMoreToggle2
            ? friends.map((item) => {
                return (
                  <li key={item.id} className="sidebarFriend">
                    <img
                      src={item.profileSrc}
                      alt={item.name}
                      className="sidebarFriendImg"
                    />
                    <span className="sidebarFriendName">{item.name}</span>
                  </li>
                );
              })
            : friends.slice(0, -5).map((item) => {
                return (
                  <li key={item.id} className="sidebarFriend">
                    <img
                      src={item.profileSrc}
                      alt={item.name}
                      className="sidebarFriendImg"
                    />
                    <span className="sidebarFriendName">{item.name}</span>
                  </li>
                );
              })}
        </ul>
        <button
          className="sidebarButton"
          onClick={() => setShowMoreToggle2(!showMoreToggle2)}
        >
          {showMoreToggle2 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
