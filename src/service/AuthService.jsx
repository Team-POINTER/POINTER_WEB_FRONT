import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo, kakaoLogin } from "../api/auth";
export const AuthService = {
  kakaoLogin: createAsyncThunk(`auth/kakao-login`, async (dto, thunkApi) => {
    const response = await kakaoLogin(dto);
    return response;
  }),
  getUserInfo: createAsyncThunk(`auth/userInfo`, async (thunkApi) => {
    const response = await getUserInfo();
    return response;
  }),
};
