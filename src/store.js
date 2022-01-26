import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./redux/blocksSlice";

export default configureStore({
  reducer: {
    blocks: blocksReducer,
  },
});
