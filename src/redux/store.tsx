import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import shopReducer from "./shopSlice";

const store = configureStore({
    reducer: {
        shop: shopReducer,
        product: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;