import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice";
import prodcutReducer from "./pages/category/productSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: prodcutReducer,
  },
});

export default store;
