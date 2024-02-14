import React, { FC, useEffect } from "react";
import { usersSelector } from "../../store/users/user-selector";
import { getUsers } from "../../store/users/actions";
import { setModal } from "../../store/users/user-slice";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import Button from "../button";
import UserList from "../user-list/UserList";

const Home: FC = () => {
  const users = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();

  const handleShowModal = () => {
    dispatch(setModal(true));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Button label="Add" onClick={handleShowModal} />
      <UserList users={users} />
    </div>
  );
};

export default Home;
