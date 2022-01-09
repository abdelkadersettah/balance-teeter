import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import seeSawReducer from "../seeSawReducer";

// export default configureStore({
//   reducer: {
//     seeSaw: seeSawReducer,
//   },
// });
const reducers = combineReducers({
  seeSaw: seeSawReducer,
});
export default reducers;
