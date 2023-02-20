import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "redux/auth/http/http";
import { selectToken } from "redux/auth/auth-selectors";

  export const getUser =createAsyncThunk( 'user',async(_,{getState,rejectWithValue})=>{
    const stateToken = selectToken(getState());
    if(!stateToken){
        return rejectWithValue()
    }
    token.set(`Bearer ${stateToken}`);
    const {data} = await privateApi.get('/users/current');
    return data;
}) 