import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slices/counter/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store;