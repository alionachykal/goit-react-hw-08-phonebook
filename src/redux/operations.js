
import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "./auth/http/http";





export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
    async (_, {rejectWithValue}) => {
        try {
          const { data } = await privateApi.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsAction = createAsyncThunk(
  "contacts/addContactsAction",
  async (newContact,{rejectWithValue}) => {
    try {
      const { data } = await privateApi.post('/contacts', newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsAction = createAsyncThunk(
  'contacts/deleteContactsAction',
  async (id, {rejectWithValue}) => {
    try {
       const { data } = await privateApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);