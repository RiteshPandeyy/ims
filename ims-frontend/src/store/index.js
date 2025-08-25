import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import invoiceReducer from './slices/invoiceSlice'

export const store = configureStore({
    reducer:{
        auth:authReducer,
        invoice:invoiceReducer,
    },
})

export const  dispatch = store.dispatch;
export const getState = store.getState;