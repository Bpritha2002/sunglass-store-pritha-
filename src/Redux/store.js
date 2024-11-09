// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authSlice";
import { productCrudSlice } from "./cartSlice"; // Default import

export const store = configureStore({
    reducer: {
        contents: authenticationSlice.reducer,
        CrudKey: productCrudSlice.reducer // Use the default exported reducer
    }
});
