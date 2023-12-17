import { useSelector } from "react-redux";
import { selectPosition } from "../redux/positions/selectors";

export const usePosition = () => {
  const position = useSelector(selectPosition);

  return {
    position,
  };
};
