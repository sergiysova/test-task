import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  status: 'idle',
  error: null
}

export const fetchToken = createAsyncThunk('token/fetchToken', async (url = 'https://frontend-test-assignment-api.abz.agency/api/v1/token') => {
  
  const responce = await fetch(url);
  
  return await responce.json();
})


const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    resetToken: (state, action) => {
      state.data = {}
      state.status = 'idle'
    }
  },
  extraReducers: {
    [fetchToken.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchToken.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload.token;
    },
    [fetchToken.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    
  }
})
export const {resetToken} = tokenSlice.actions;
export default tokenSlice.reducer;



