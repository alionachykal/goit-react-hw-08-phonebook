import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './user-operation';





const userInitialState = {
    data: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    extraReducers: builder => {
        builder
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.data = payload;
            });
  },
});

export const userReducer = userSlice.reducer;
 