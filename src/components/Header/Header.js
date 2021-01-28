import React from "react";
import { Icon, LogoutIcon } from "../../assets/icons";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={Icon} alt="icon" />
      <p>
        <span>Logout</span>
        <span>
          <img src={LogoutIcon} alt="iconLogout" />
        </span>
      </p>
    </header>
  );
};

export default Header;
