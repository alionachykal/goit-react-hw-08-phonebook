import { createSlice } from "@reduxjs/toolkit";
import  {logIn, logOut, register } from "./auth-operations";

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';




const authSlice = createSlice({
    name: 'auth',
    initialState: {
    token: null,
    isLoggedInd: false,
    credentials: null,
        
    },
    extraReducers: builder => {
        builder
         
            .addCase(register.fulfilled, (state, { payload }) => {
                state.credentials = payload.user;
                state.token = payload.token;
                state.isLoggedInd = true;
            })
           
            .addCase(logIn.fulfilled, (state, { payload }) => {
                state.credentials = payload.user;
                state.token = payload.token;
                state.isLoggedInd = true;
                
            })
         
            .addCase(logOut.fulfilled, state => {
                state.credentials = null;
                state.token = null;
                state.isLoggedInd = false;
            })
      
        
    },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

