import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ApiService from '../../app/api/apiService';

const apiService = new ApiService();

const initialState = {
  nextPageUrl: null,
  data: [],
  status: 'idle',
  error: null,
  listUpdating: {
    status: 'idle',
    error: null,
    result: {}
  }
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
  async (url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6') => apiService.getResource(url)
  )

export const addNewUser = createAsyncThunk(
  'users/addNewUSer',
  async data => apiService.addNewUser(data)
  )

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUSers: (state, action) => {
      state.data = []
      state.status = 'idle'
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = state.data.concat(action.payload.users);
      state.nextPageUrl = action.payload.links.next_url
      // Add any fetched posts to the array
      //state.data = state.data.concat(action.payload)
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [addNewUser.pending]: (state, action) => {
      state.listUpdating.status = 'loading'
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.listUpdating.status = 'succeded'
      state.result = action.payload

    },
    [addNewUser.rejected]: (state, action) => {
      state.listUpdating.status = 'failed'
      state.listUpdating.error = action.error.message
    }
    
  }
})
export const {resetUSers} = usersSlice.actions;
export default usersSlice.reducer;



