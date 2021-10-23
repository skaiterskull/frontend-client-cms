import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/product/categorySlice";
import prodcutReducer from "./pages/product/productSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: prodcutReducer,
  },
});

export default store;
