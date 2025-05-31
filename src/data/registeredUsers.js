// src/data/registeredUsers.js

// This will act like a shared database for now
export let registeredUsers = [
  // Example format:
  // { fullName: 'John Doe', email: 'john@example.com', eventId: '123', phone: '...', school: '...' }
];

/**
 * Add a registered user only if they haven't registered for the event already.
 */
export const addRegisteredUser = (user) => {
  const exists = registeredUsers.some(
    (u) => u.email === user.email && u.eventId === user.eventId
  );

  if (!exists) {
    registeredUsers.push(user);
  }
};

/**
 * Check if a user is already registered for a specific event.
 */
export const isUserRegisteredForEvent = (email, eventId) => {
  return registeredUsers.some(
    (user) => user.email === email && user.eventId === eventId
  );
};

/**
 * Optional: Get all users for an event.
 */
export const getUsersForEvent = (eventId) => {
  return registeredUsers.filter((user) => user.eventId === eventId);
};
