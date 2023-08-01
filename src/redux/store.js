import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Slices/contactSlice';
import { filterReducer } from './Slices';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});
