import React from "react";
//component
import UserItem from "../UserItem/UserItem";
//hook
import { useUsers } from "../../hooks";
//style
import scss from "./UserList.module.scss";

const UserList = () => {
  const { users } = useUsers();

  const sortedUsers = users.users?.length
    ? [...users.users].sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      )
    : [];
  return (
    <div>
      <ul className={scss.list}>
        {sortedUsers?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
