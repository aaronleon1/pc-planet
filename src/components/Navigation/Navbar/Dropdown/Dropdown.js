import React, { useState } from "react";
import NavigationItems from "../../NavigationItems/NavigationItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu-clicked" : "dropdown-menu"}
    >
      {NavigationItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
