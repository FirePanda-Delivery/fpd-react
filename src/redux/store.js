import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import restaurant from './slices/restaurantSlice.js'

export const  store = configureStore({
    reducer: {
      filter: filter,
        cart: cart,
        restaurant: restaurant,
    }
})