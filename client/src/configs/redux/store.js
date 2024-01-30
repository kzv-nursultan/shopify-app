import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducer";

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default store;
