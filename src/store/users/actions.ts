import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../type";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectedWithValue }: any) => {
    try {
      const url = "http://localhost:8080/users";
      const { data } = await axios(url);
      return data;
    } catch (_e) {
      rejectedWithValue("Error");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: string, { rejectedWithValue }: any) => {
    try {
      const url = `http://localhost:8080/users/${id}`;
      await axios.delete(url);
      return id;
    } catch (_e) {
      rejectedWithValue("Error");
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const url = `http://localhost:8080/users`;
      const options = {
        method: "POST",
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios(url, options);
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User, { rejectedWithValue }: any) => {
    try {
      const url = `http://localhost:8080/users/${user.id}`;
      const options = {
        method: "PATCH",
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios(url, options);
      return data;
    } catch (error) {
      return rejectedWithValue("error");
    }
  }
);
