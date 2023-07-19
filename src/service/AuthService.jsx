import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../api/auth";
export const AuthService = {
  getUserInfo: createAsyncThunk(`auth/userInfo`, async (userId, thunkApi) => {
    const response = await getUserInfo(userId);
    return response;
  }),
};
