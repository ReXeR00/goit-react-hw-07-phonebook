import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Slices/contactSlice.js';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});