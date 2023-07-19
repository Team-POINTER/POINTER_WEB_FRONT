import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

export const { setAccessToken, setUserId } = memberSlice.actions;

export default memberSlice;
