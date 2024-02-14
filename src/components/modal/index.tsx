import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { User } from "../../type";

type ModalProps = {
  isOpen: boolean;
  closeModal: VoidFunction;
  user: User;
  type: string;
  createUser: (data: User) => void;
  updateUser: (data: User) => void;
};

const UserModal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  createUser,
  updateUser,
  user,
  type,
}) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState<number | null>(user.age);

  const handleSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    if (name && age) {
      type === "add" && createUser({ name, age });
      type === "edit" && updateUser({ name, age, id: user.id });
      setName("");
      setAge(null);
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Create User Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age !== null ? age : ""}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <button type="submit">Save</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default UserModal;
