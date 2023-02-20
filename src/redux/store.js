
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user-slice';
import { authReducer } from "./auth/auth-slice";

import {  filterSlice } from './contacts/filter.slice';
import { contactsSlice } from './contacts/contacts.slice';
import {
 persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
        auth: authReducer,
        user: userReducer,
   
    },
    
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),


  
});



export const persistor = persistStore(store);


   



