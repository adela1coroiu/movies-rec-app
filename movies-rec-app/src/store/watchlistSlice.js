import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: { items: [] },
    reducers: {
        addToWatchlist: (state, action) => {
            //action will receive in its payload a movie object
            const exists = state.items.find(movie => movie.id === action.payload.id);
            if(!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromWatchlist: (state, action) => {
            //action will receive in its payload a movie id
            state.items = state.items.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;