import React from "react";
import { ReactDOM } from "react";
const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className="sub-menu">
        {submenus.map((submenu) => {
            return(
          <li className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
            );
            })}
      </ul>
    );
  };
  
  export default Dropdown;