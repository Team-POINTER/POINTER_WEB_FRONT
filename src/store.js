import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import memberSlice from "./modules/member";
import roomSlice from "./modules/room";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    member: memberSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
