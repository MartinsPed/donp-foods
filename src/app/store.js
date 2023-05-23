import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'
import foodItemsReducer from '../features/foodItems/foodItemsSlice'
import cartShowSliceReducer from '../features/cart/cartShowSlice'
import cartItemsInfoReducer from '../features/cartItemsInfo/cartItemsSlice'
// import { cartReducer } from '../features/cartItemsInfo/cartItemsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    foodItems: foodItemsReducer,
    cartShow: cartShowSliceReducer,
    // cart: cartReducer
    cartItemsInfo: cartItemsInfoReducer
    // counter: counterReducer,
  },
});
