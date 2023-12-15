import React, { ReactNode } from "react";
import scss from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className={scss.section}>
      <h2 className={scss.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
