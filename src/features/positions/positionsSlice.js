import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const fetchPositions = createAsyncThunk('positions/fetchPositions', async (url = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions') => {
  
  const responce = await fetch(url);
  
  return await responce.json();
})


const postSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPositions.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPositions.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload.positions;
    },
    [fetchPositions.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    
  }
})

export default postSlice.reducer;



