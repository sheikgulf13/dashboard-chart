// src/redux/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    details: [] 
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.details?.push(action.payload)
    },
    addRow: (state, action) => {
      state.details[0]?.push(action.payload)
    },
  },
});

export const { setData, addRow } = dataSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    dispatch(setData(response?.data?.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default dataSlice.reducer;
