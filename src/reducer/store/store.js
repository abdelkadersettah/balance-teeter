import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../action/action";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
