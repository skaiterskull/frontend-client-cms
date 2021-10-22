import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/product/categorySlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
