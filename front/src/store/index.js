import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import { api } from "../api/apiSlice";

export default configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
