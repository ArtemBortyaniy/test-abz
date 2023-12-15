import { useSelector } from "react-redux";
import { selectUsers } from "../redux/users/selectors";

export const useUsers = () => {
  const users = useSelector(selectUsers);

  return {
    users,
  };
};
