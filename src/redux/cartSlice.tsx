import { createSlice } from "@reduxjs/toolkit";
import itemCart from "../Page/ItemCart";
import { RootState } from "./store";

const initialState ={
    product: [],
    totalQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const removeItemId = action.payload;
            
        }
    }

})

export const selectcart = (state:RootState) => state;

export const {
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;