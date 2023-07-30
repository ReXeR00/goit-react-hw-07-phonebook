import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64c69bf50a25021fde91d33a.mockapi.io';

export const fetchTask = createAsyncThunk(
  'task/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/task');
    } catch(e) {
        return thunkApi.rejectWithValue(e.message)
    }
  }
);
