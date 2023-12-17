import React from "react";
import scss from "./UserItem.module.scss";

interface User {
  email: string;
  id: number | string;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number | string;
  registration_timestamp: number;
}

interface UserItemProps {
  user: User;
}

const formatPhoneNumber = (originalNumber: string): string => {
  const cleanedNumber = originalNumber.replace(/\D/g, "");

  const formattedNumber = `+38 (${cleanedNumber.slice(
    2,
    5
  )}) ${cleanedNumber.slice(5, 8)} ${cleanedNumber.slice(
    8,
    10
  )} ${cleanedNumber.slice(10)}`;

  return formattedNumber;
};

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li className={scss.item}>
      <img src={user.photo} alt="User's photo" className={scss.photo} />
      <p className={scss.name}>{user.name}</p>
      <div className={scss.containerText}>
        <p className={scss.text}>{user.position}</p>
        <p className={scss.text}>{user.email}</p>
        <p className={scss.text}>{formatPhoneNumber(user.phone)}</p>
      </div>
    </li>
  );
};

export default UserItem;
