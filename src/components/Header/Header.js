import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, LogoutIcon } from "../../assets/icons";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-refresh");
    history.push("/login");
  };
  return (
    <header>
      <img src={Icon} alt="icon" />
      <p onClick={handleLogout}>
        <span>Logout</span>
        <span>
          <img src={LogoutIcon} alt="iconLogout" />
        </span>
      </p>
    </header>
  );
};

export default Header;
