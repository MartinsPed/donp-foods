import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.user = action.payload;
            // console.log(action)
        },
        setSignOutState: state => {
            state.user = null;
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const SelectUser = (state) => state.user.user;

export default userSlice.reducer
