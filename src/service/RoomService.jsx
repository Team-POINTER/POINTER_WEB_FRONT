import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoomList } from "../api/room";

export const RoomService = {
  getRoomList: createAsyncThunk(`room/list`, async (dto, thunkApi) => {
    const { keyword } = dto;
    const response = await getRoomList(keyword);
    return response;
  }),
};
