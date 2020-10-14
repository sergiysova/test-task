import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ApiService from '../../app/api/apiService';

const apiService = new ApiService();

const initialState = {
  users: {
    nextPageUrl: null,
    data: [],
    status: 'idle',
    error: null,
  },
  newUser: {
    status: 'idle',
    error: null,
    result: {},
    popupOpened: false
  },
  token: {
    data: {},
    status: 'idle',
    error: null
  },
  positions: {
    data: {},
    status: 'idle',
    error: null
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

export const fetchToken = createAsyncThunk('users/fetchToken', async (url = 'https://frontend-test-assignment-api.abz.agency/api/v1/token') => {
  const responce = await fetch(url);
  return await responce.json();
})

export const fetchPositions = createAsyncThunk('users/fetchPositions', async (url = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions') => {
  const responce = await fetch(url);
  return await responce.json();
})


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetState: (state) => {
      state.users = initialState.users;
      state.newUser = initialState.newUser;
      state.token = initialState.token;
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.users.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users.status = 'succeeded';
      state.users.data = [...state.users.data.concat(action.payload.users)];
      state.users.nextPageUrl = action.payload.links.next_url;
      // Add any fetched posts to the array
      //state.data = state.data.concat(action.payload)
    },
    [fetchUsers.rejected]: (state, action) => {
      state.users.status = 'failed';
      state.users.error = action.error.message;
    },
    [addNewUser.pending]: (state) => {
      state.newUser.status = 'loading';
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.newUser.status = 'succeded';
      state.newUser.result = action.payload;
      state.newUser.popupOpened = true;

    },
    [addNewUser.rejected]: (state, action) => {
      state.newUser.status = 'failed';
      state.newUser.error = action.error.message;
    },
    [fetchToken.pending]: (state) => {
      state.token.status = 'loading';
    },
    [fetchToken.fulfilled]: (state, action) => {
      state.token.status = 'succeeded';
      state.token.data = action.payload.token;
    },
    [fetchToken.rejected]: (state, action) => {
      state.token.status = 'failed';
      state.token.error = action.error.message;
    },
    [fetchPositions.pending]: (state, action) => {
      state.positions.status = 'loading';
    },
    [fetchPositions.fulfilled]: (state, action) => {
      state.positions.status = 'succeeded';
      state.positions.data = action.payload.positions;
    },
    [fetchPositions.rejected]: (state, action) => {
      state.positions.status = 'failed';
      state.positions.error = action.error.message;
    }
    
  }
})
export const {resetState} = usersSlice.actions;
export default usersSlice.reducer;



