import { configureStore } from "@reduxjs/toolkit";

import shoppingCartReducer from "../fetaure/cart/shoppingCart";

export const store = configureStore({
  reducer: shoppingCartReducer
});