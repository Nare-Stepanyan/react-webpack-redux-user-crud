import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const userSelector = (state: RootState) => state.user;

export const usersSelector = createSelector(userSelector, (app) => app.users);
export const showModalSelector = createSelector(
  userSelector,
  (app) => app.showModal
);
