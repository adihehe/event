// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventSlice';
import registrationReducer from './registrationSlice';

const store = configureStore({
  reducer: {
    events: eventReducer,
    registration: registrationReducer
  }
});

export default store;
