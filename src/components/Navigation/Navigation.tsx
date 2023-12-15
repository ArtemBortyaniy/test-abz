import React, { FC } from "react";
import Logo from "../Logo/Logo";
import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={`${scss.containerHeader} container`}>
      <Logo />

      <nav className={scss.containerNav}>
        <a href="#users" className={scss.link}>
          Users
        </a>
        <a href="#signup" className={scss.link}>
          Sign up
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
