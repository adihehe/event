// redux/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';
import initialEvents from '../data/eventData';

const eventSlice = createSlice({
  name: 'events',
  initialState: initialEvents,
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
    updateEvent: (state, action) => {
      const index = state.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteEvent: (state, action) => {
      return state.filter(event => event.id !== action.payload);
    }
  }
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
