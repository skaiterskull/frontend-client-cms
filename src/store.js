import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice";
import productReducer from "./pages/category/productSlice";
import cartReducer from "./pages/cart/cartSlice";
import userReducer from "./pages/home/userSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
