import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import categoryReducer from "./pages/category/categorySlice";
import productReducer from "./pages/category/productSlice";
import cartReducer from "./pages/cart/cartSlice";
import userReducer from "./pages/userData/userSlice";
import paymentReducer from "./pages/checkout/paymentSlice";
import storage from "redux-persist/lib/storage";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: persistedCartReducer,
    user: userReducer,
    payOpt: paymentReducer,
  },
});

export const persistor = persistStore(store);

export default store;
