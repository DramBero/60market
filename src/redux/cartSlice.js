import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    price: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items = [...state.items, action.payload.productId]
        state.price = state.price + action.payload.productPrice
    },
    removeFromCart: (state, action) => {
        if (state.items.includes(action.payload.productId)) {
            const firstIndex = state.items.findIndex(a => a === action.payload.productId)
            state.items = state.items.filter((e, i) => i !== firstIndex)
            state.price = state.price - action.payload.productPrice
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer