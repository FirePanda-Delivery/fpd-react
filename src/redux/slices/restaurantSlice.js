import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurantsStatus', async (params, thunkAPI) => {
    const {sortBy, order, category, search, currentPage} = params
    //деструктаризация: res.data. Берем сразу data
    const {data} = await axios.get(
        // `https://67e1d67e58cc6bf785273840.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            `http://fpd.midavon.ru/api/restaurant?page=${currentPage}&limit=9&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data
})

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = "loading"
                state.items = []
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = "success"
            })
            .addCase(fetchRestaurants.rejected, (state) => {
                state.status = "error"
                state.items = []
            })
    }
})

export const selectRestaurantData = (state) => state.restaurant;

export const {setItems} = restaurantSlice.actions;

export default restaurantSlice.reducer









