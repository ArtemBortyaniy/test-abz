import React, { FC } from "react";
import { Link } from "react-router-dom";
import sprite from "../../svg/symbol-defs.svg";
import scss from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link to="/">
      <svg className={scss.logo}>
        <use href={`${sprite}#icon-Logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
