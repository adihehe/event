// src/redux/registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addRegisteredUser } from '../data/registeredUsers';

const initialState = {
  users: [],
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { email, eventId } = action.payload;

      // Check if user already registered for this event
      const existingUser = state.users.find(
        user => user.email === email && user.eventId === eventId
      );

      if (!existingUser) {
        state.users.push(action.payload);
        addRegisteredUser(action.payload);
      }
    },
  },
});

export const { registerUser } = registrationSlice.actions;
export default registrationSlice.reducer;
