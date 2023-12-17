import { useSelector } from "react-redux";
import { selectPosition } from "../redux/positions/selectors.jsx";

export const usePosition = () => {
  const position = useSelector(selectPosition);

  return {
    position,
  };
};
