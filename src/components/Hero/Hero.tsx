import React, { FC } from "react";
import scss from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={scss.containerHero}>
      <h1 className={scss.title}>Test assignment for front-end developer</h1>
      <p className={scss.text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <button type="button" className={scss.signUp}>
        Sign up
      </button>
    </div>
  );
};

export default Hero;
