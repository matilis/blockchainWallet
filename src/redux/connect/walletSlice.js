import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    connected: false,
    address: null,
  },
  reducers: {
    connectWallet(state, action) {
      state.connected = true;
      state.address = action.payload;
    },
    disconnectWallet(state) {
      state.connected = false;
      state.address = null;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;

export default walletSlice.reducer;
