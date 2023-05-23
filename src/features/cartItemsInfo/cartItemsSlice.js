// export const addItems = (item) => {
//     return {
//         type: 'ADD_ITEM',
//         payload: item
//     }
// }

// const initialState = {
//     items: []
// }

// export const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_ITEM':
//             return {
//                 ...state, items: [...state.items, action.payload] 
//             }
//         default:
//             return state;
//     }
// }


import { createSlice } from "@reduxjs/toolkit";

const cartItemsInfoSlice = createSlice({
    name: 'cartItemsInfo',
    initialState: [],
    reducers: {
        clearCart: (state) => {
            return []
        },
        addToCart: (state, action) => {
            const itemToAdd = action.payload
            const existingItem = state.find((item) => item.id === itemToAdd.id)
            if(existingItem) {
                existingItem.qty += 1
            } else {
                state.push({...itemToAdd, qty: 1})
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            const existingProductIndex = state.findIndex((item) => item.id === productId)
            if(existingProductIndex !== -1) {
                const existingProduct = state[existingProductIndex]
                if(existingProduct.qty > 1) {
                    existingProduct.qty -= 1
                } else {
                    state.splice(existingProductIndex, 1)
                }
            }
        },
        increaseQty: (state, action) => {
            const itemId = action.payload
            const existingItem = state.find((item) => item.id === itemId)
            if(existingItem) {
                existingItem.qty += 1
            } else {
                state.push(action.payload)
            }
        },
        decreaseQty: (state, action) => {
            const itemId = action.payload
            const existingItem = state.find((item) => item.id === itemId)
            if(existingItem && existingItem.qty > 1) {
                existingItem.qty -= 1
            }
        },
        setCartItemsInfo: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { clearCart, addToCart, removeFromCart, increaseQty, decreaseQty, setCartItemsInfo } = cartItemsInfoSlice.actions;

export const SelectCartItemsInfo = (state) => (state.cartItemsInfo);

export default cartItemsInfoSlice.reducer
