import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
    itemProduct: [{
        id: '',
        img: '',
        name: '',
        description: '',
        price: 0,
        quantity: 0,
    }],
    subtotal: 0,
    quantity: 0
} 

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.itemProduct.findIndex( (item) => item.id === action.payload.id);
            if( itemIndex >= 0){
                state.itemProduct[itemIndex].quantity += 1;
            } else {
                state.itemProduct.push(action.payload)
            }
            state.subtotal = state.subtotal + action.payload.price
            state.quantity = state.quantity + action.payload.quantity
        },
        removeToCart: (state, action) => {
            const removeItem = state.itemProduct.findIndex( (item) => item.id === action.payload.id);
            if( removeItem ){
                state.quantity = state.quantity - state.itemProduct[removeItem].quantity
                state.subtotal = state.subtotal - (state.itemProduct[removeItem].price * state.itemProduct[removeItem].quantity) 
                state.itemProduct = state.itemProduct.filter((item) => item.id !== action.payload.id)
            }
        },
        upItem: (state, action) => {
            const itemIndex = state.itemProduct.findIndex( (item) => item.id === action.payload.id);
            if( itemIndex ){
                state.itemProduct[itemIndex].quantity += 1;
            }
            state.subtotal = state.subtotal + action.payload.price
            state.quantity = state.quantity + action.payload.quantity;
        },
        downItem: (state, action) => {
            const itemIndex = state.itemProduct.findIndex( (item) => item.id === action.payload.id);
            const quantity = state.itemProduct[itemIndex].quantity;
            if( itemIndex && quantity > 1){
                state.itemProduct[itemIndex].quantity -= 1;
            } else {
                state.itemProduct = state.itemProduct.filter((item) => item.id !== action.payload.id)
            }
            state.subtotal = state.subtotal - action.payload.price
            state.quantity = state.quantity - action.payload.quantity
        }
    }

})

export const selectProduct = (state:RootState) => state.product.itemProduct;
export const selectSubTotal = (state:RootState) => state.product.subtotal;
export const selectQuantity = (state:RootState) => state.product.quantity;

export const {
    addToCart, removeToCart, upItem, downItem
} = productSlice.actions;

export default productSlice.reducer;