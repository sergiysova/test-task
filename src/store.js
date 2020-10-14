import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice';
import tokenReducer from './features/token/tokenSlice';
import positionsReducer from './features/positions/positionsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    token: tokenReducer,
    positions: positionsReducer
  }
})
