import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoomList, updateRoomName } from "../api/room";

export const RoomService = {
  getRoomList: createAsyncThunk(`room/list`, async (dto, thunkApi) => {
    const { keyword } = dto;
    const response = await getRoomList(keyword);
    return response;
  }),
  updateRoomNm: createAsyncThunk(`room/update-name`, async (dto, thunkApi) => {
    const response = await updateRoomName(dto);
    return response;
  }),
};
