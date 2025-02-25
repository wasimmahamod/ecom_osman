import { configureStore } from '@reduxjs/toolkit'
import userSlices from './userSlices.js';

export default configureStore({
  reducer: {
    user: userSlices,
  },
})