import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Slices/contactSlice';
import { filterReducer } from './Slices/filterSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});
