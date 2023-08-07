import { createSlice } from "@reduxjs/toolkit";
import { RoomService } from "../service/RoomService";

const initialState = {
  updateRoomForm: {},
  roomList: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setUpdateRoomForm: (state, action) => {
      state.updateRoomForm = action.payload;
    },
    setRoomList: (state, action) => {
      state.roomList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RoomService.getRoomList.fulfilled, (state, action) => {
      const response = action.payload.data.data.roomList;
      state.roomList = response;
    });
  },
});

export const { setUpdateRoomForm, setRoomList } = roomSlice.actions;

export default roomSlice;
