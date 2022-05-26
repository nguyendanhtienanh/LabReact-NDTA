import { createSlice } from "@reduxjs/toolkit";
import img1 from '../img/data1.png';
import img2 from '../img/iconstar.png';
import img3 from '../img/more-img.png';
import { RootState } from "./store";

const initialState = {
    itemShop: [
        {
            id: "1",
            name: 'Samsung Galaxy A31',
            price: 6940000,
            img: img1,
            description: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
            star: img2,
            more: img3,
        },
        {
            id: "2",
            name: 'Samsung Galaxy A32',
            price: 6950000,
            img: img1,
            description: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
            star: img2,
            more: img3,
        },
        // {
        //     id: "3",
        //     name: 'Samsung Galaxy A33',
        //     price: 6960000,
        //     img: img1,
        //     description: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        //     star: img2,
        //     more: img3,
        // },
    ],
    products: [
        {
            id: "",
            name: '',
            price: 0,
            img: '',
            description: '',
            star: '',
            more: '',
        },
    ],
}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        showProduct: (state, action) => {
            state.products =  state.itemShop.filter((item) => item.id === action.payload)
        },
    }
});

export const selectShop = (state:RootState) => state.shop.itemShop;
export const selectProducts = (state:RootState) => state.shop.products;

export const {
    showProduct
} = shopSlice.actions;

export default shopSlice.reducer;