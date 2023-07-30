import { createSlice } from '@reduxjs/toolkit';
import { fetchTask } from 'redux/operations';
const taskSlice = createSlice({
  name: task,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTask.pending](state, action) {},
    [fetchTask.fulfilled](state, action) {
      //   state.isLoading = false;
      //   state.errorerror = null;
      //   state.items = action.payload;
    },
    [fetchTask.error](state, action) {
      //   state.isLoading = false;
      //   state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = taskSlice.actions;
