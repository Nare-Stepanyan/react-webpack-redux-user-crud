import React, { FC, useState } from "react";
import { User } from "../../type";
import SingleUser from "../single-user";
import { showModalSelector } from "../../store/users/user-selector";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import Modal from "../modal";
import { ModalType } from "../../contants";
import { createUser, updateUser } from "../../store/users/actions";
import { setModal } from "../../store/users/user-slice";

type UserListProps = {
  users: User[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(showModalSelector);
  const modalType: ModalType = {
    ADD: "add",
    EDIT: "edit",
  };
  const [user, setUser] = useState<User>({ name: "", age: null, id: null });
  const [type, setType] = useState<string>(modalType.ADD);

  const handleCloseModal = () => {
    dispatch(setModal(false));
  };

  const createNewUser = (user: User) => {
    if (user) {
      dispatch(createUser(user));
      dispatch(setModal(false));
    }
  };
  const updateTheUser = (user: User) => {
    if (user) {
      dispatch(updateUser(user));
      dispatch(setModal(false));
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <SingleUser
                key={user.id}
                user={user}
                setUser={setUser}
                setType={setType}
              />
            );
          })}
        </tbody>
      </table>
      {showModal && (
        <Modal
          isOpen={showModal}
          closeModal={handleCloseModal}
          createUser={createNewUser}
          updateUser={updateTheUser}
          user={user}
          type={type}
        />
      )}
    </>
  );
};

export default UserList;
