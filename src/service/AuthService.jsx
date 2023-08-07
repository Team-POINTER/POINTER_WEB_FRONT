import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo, kakaoLogin, logout } from "../api/auth";
import { removeTokenCookie } from "../function/cookie";
export const AuthService = {
  kakaoLogin: createAsyncThunk(`auth/kakao-login`, async (dto, thunkApi) => {
    const response = await kakaoLogin(dto);
    return response;
  }),
  getUserInfo: createAsyncThunk(`auth/userInfo`, async (thunkApi) => {
    const response = await getUserInfo();
    return response;
  }),
  kakaoLogout: createAsyncThunk(`auth/kakao-logout`, async (thunkApi) => {
    const response = await logout();
    removeTokenCookie();
    return response;
  }),

  // 토큰재발행: createAsyncThunk(`auth/userInfo`, async (thunkApi) => {
  //   const response = await auth쪽 토큰재발행();
  //   return response;
  // }),
};
