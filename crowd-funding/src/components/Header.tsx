import React from "react";
import "../styles/header.scss";
import logo from "../img/logo.svg";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="./" className="header__logo--icon">
          <img src={logo} alt="crowdfund logo" />
        </a>
      </div>
      <div className="header__links">
        <a className="header__link" href="/#">
          About
        </a>
        <a className="header__link" href="/#">
          Discover
        </a>
        <a className="header__link" href="/#">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
