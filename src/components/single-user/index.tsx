import React, { FC, useEffect } from "react";
import { User } from "../../type";
import Button from "../button";
import { useAppDispatch } from "../../app/hook";
import { deleteUser, updateUser } from "../../store/users/actions";
import { setModal } from "../../store/users/user-slice";

type SingleUserProps = {
  user: User;
  setUser: (user: User) => void;
  setType: (type: string) => void;
};

const SingleUser: FC<SingleUserProps> = ({ user, setUser, setType }) => {
  const dispatch = useAppDispatch();
  const onDelete = () => {
    if (user) {
      dispatch(deleteUser(user.id as string));
    }
  };
  const onEdit = () => {
    setUser(user);
    setType("edit");
    dispatch(setModal(true));
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <Button label="Edit" onClick={onEdit} />
        <Button label="Delete" onClick={onDelete} />
      </td>
    </tr>
  );
};

export default SingleUser;
