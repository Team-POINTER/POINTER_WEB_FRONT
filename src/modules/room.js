import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateRoomForm: {},
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setUpdateRoomForm: (state, action) => {
      state.updateRoomForm = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUpdateRoomForm } = roomSlice.actions;

export default roomSlice;
