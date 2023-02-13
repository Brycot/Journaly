import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        open: false,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleSideBar } = uiSlice.actions;
