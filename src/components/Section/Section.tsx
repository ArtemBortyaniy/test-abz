import React, { ReactNode } from "react";
import scss from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <div className={scss.section} id={id}>
      <h2 className={scss.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
