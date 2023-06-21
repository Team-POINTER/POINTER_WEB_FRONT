import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import roomSlice from "./modules/room";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
