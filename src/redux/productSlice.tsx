import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState ={
    itemProduct: [{
        id: "",
        img: '',
        name: '',
        description: '',
        price: '',
        total: 0,
    }],
    quantity: 0,
    itemQuantity: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.itemProduct.findIndex( (item) => item.id === action.payload.id);
            if( itemIndex >= 0){
                state.itemQuantity = state.itemProduct[itemIndex].total += 1;
            } else {
                state.itemProduct.push(action.payload)
            }
        },
        removeToCart: (state, action) => {
            state.itemProduct = state.itemProduct.filter((item) => item.id !== action.payload.id)
            state.quantity = state.itemProduct.length
        }
    }

})

export const selectProduct = (state:RootState) => state.product.itemProduct;
export const selectQuantity = (state:RootState) => state.product.itemQuantity;

export const {
    addToCart, removeToCart
} = productSlice.actions;

export default productSlice.reducer;