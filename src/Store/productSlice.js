import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const productSlice = createSlice({

});

export const{} = productSlice.actions;
export default productSlice.reducer

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        const result = data.json();
    }
}