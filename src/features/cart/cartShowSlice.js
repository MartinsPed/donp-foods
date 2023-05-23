import { createSlice } from "@reduxjs/toolkit";

export const cartShowSlice = createSlice({
    name: 'cartShow',
    initialState: {
        cartShow: false
    },
    reducers: {
        setCartShow: (state, action) => {
            state.cartShow = action.payload
            // console.log(action)
        },
        setHideCartShow: (state, action) => {
            state.cartShow = false
        }
    }
})

export const { setCartShow, setHideCartShow } = cartShowSlice.actions;

export const SelectCartShow = (state) => state.cartShow.cartShow;

export default cartShowSlice.reducer
