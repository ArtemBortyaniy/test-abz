import React, { FC } from "react";
import scss from "./BtnShowMore.module.scss";

interface BtnShowMoreProps {
  handlePagination: () => void;
}

const BtnShowMore: FC<BtnShowMoreProps> = ({ handlePagination }) => {
  return (
    <div className={scss.btnContainer}>
      <button
        type="button"
        className={scss.btnShowMore}
        onClick={() => {
          handlePagination();
        }}
      >
        Show more
      </button>
    </div>
  );
};

export default BtnShowMore;
