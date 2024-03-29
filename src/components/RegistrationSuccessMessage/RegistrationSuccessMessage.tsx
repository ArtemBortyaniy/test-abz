import React, { FC } from "react";
import img from "../../img/success-image.jpg";
import scss from "./RegistrationSuccessMessage.module.scss";

const RegistrationSuccessMessage: FC = () => {
  return (
    <div className={scss.imgContainer}>
      <img src={img} alt="Успех регистрации" />
    </div>
  );
};

export default RegistrationSuccessMessage;
