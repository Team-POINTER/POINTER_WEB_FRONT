import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoomList } from "../api/room";

export const RoomService = {
  getRoomList: createAsyncThunk(`room/list`, async (thunkApi) => {
    const response = await getRoomList();
    return response;
  }),
};
