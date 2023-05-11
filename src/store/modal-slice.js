import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },
    openModal(state) {
      state.isOpen = true;
    },
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
