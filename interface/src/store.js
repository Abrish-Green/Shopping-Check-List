import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './Service/Features/Shop/ShopSlice';
export const store = configureStore({
    reducer: {
        shop: shopReducer
    }
})