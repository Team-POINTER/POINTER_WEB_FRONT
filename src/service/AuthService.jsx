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

  // 토큰재발행: createAsyncThunk(`auth/userInfo`, async (thunkApi) => {
  //   const response = await auth쪽 토큰재발행();
  //   return response;
  // }),
};
