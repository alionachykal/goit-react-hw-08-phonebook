
import { createAsyncThunk } from "@reduxjs/toolkit";

import { privateApi, publicApi, token } from "./http/http";




export const register = createAsyncThunk(
    'register',
    async (credentials, { rejectWithValue }) => {
    try {
      const {data}= await publicApi.post('/users/signup', credentials);
      token.set(`Bearer ${data.token}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
   'login',
  async (credentials,{rejectWithValue}) => {
    try {
      const {data} = await publicApi.post('/users/login', credentials);
      token.set(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
    'logout',
   async (_,  { rejectWithValue }) => {
    try {
      await privateApi.post('/users/logout');
     
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

