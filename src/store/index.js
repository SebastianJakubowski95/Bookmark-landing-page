import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal-slice";

const store = configureStore({
  reducer: { modal: modal },
});

export { store };
