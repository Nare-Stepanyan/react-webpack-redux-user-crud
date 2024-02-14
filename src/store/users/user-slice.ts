import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../type";
import { getUsers, deleteUser, createUser, updateUser } from "./actions";

type UserState = {
  users: User[];
  isLoading: boolean;
  showModal: boolean;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  showModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    });
  },
});

export const { setUsers, setModal } = userSlice.actions;

export default userSlice.reducer;
