import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../redux/connect/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;
