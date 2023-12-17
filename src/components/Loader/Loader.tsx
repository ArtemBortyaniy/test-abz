import React, { FC } from "react";
import loader from "../../img/loader.png";
import scss from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={scss.loaderContainer}>
      <img src={loader} alt="Лоадер" />
    </div>
  );
};

export default Loader;
