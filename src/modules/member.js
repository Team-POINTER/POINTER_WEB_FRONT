import { createSlice } from "@reduxjs/toolkit";
import { setTokenToCookie } from "../function/cookie";
import { AuthService } from "../service/AuthService";

const initialState = {
  accessToken: null,
  userId: null,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthService.kakaoLogin.fulfilled, (state, action) => {
      const response = action.payload.data.tokenDto;
      setTokenToCookie(response.refreshToken);
      state.accessToken = response.accessToken;
      state.userId = response.userId;
    });
  },
});

export const { setAccessToken, setUserId } = memberSlice.actions;

export default memberSlice;
