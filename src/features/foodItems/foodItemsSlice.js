import { createSlice } from "@reduxjs/toolkit";

export const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState: {
        foodItems: null
    },
    reducers: {
        setFoodItems: (state, action) => {
            state.foodItems = action.payload
            // console.log(action)
        }
    }
})

export const { setFoodItems } = foodItemsSlice.actions;

export const SelectFoodItems = (state) => state.foodItems.foodItems;

export default foodItemsSlice.reducer
