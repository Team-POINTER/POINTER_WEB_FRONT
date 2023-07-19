import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessToken } = memberSlice.actions;

export default memberSlice;
