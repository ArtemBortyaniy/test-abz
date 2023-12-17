import React from "react";
import { useUsers } from "../../hooks";
import UserItem from "../UserItem/UserItem";
import scss from "./UserList.module.scss";

const UserList = () => {
  const { users } = useUsers();

  return (
    <div>
      <ul className={scss.list}>
        {users.users?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
