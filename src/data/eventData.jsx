// src/data/eventData.js

let eventData = [
  {
    id: 'event1',
    name: 'Annual Science Fair',
    school: 'Greenfield High School',
    date: '2025-08-15T10:00:00',
    banner: 'https://plus.unsplash.com/premium_photo-1724078321987-4f1fcdd66e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    description: 'Join us for a celebration of innovation, experiments, and scientific talent across schools.',
    location: 'Greenfield Auditorium, Sector 21',
    category: 'Science & Innovation',
    price: 'Free',
    contact: {
      name: 'Mr. Rakesh Verma',
      phone: '+91-9123456789',
      email: 'sciencefair@greenfield.edu'
    },
    chiefGuest: 'Dr. A.P. Mehra, ISRO Scientist',
    rules: [
      'Each school can present up to 3 projects.',
      'Project explanation must not exceed 7 minutes.',
      'Students must stay beside their models during judging.'
    ],
    tags: ['Innovation', 'STEM', 'Exhibition']
  },
  {
    id: 'event2',
    name: 'Inter-School Dance Competition',
    school: 'Sunrise Public School',
    date: '2025-09-10T18:00:00',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Compete with the best dancers across the district in our energetic annual dance face-off!',
    location: 'Sunrise School Auditorium, Sector 45',
    category: 'Dance',
    price: 'Free',
    contact: {
      name: 'Mrs. Sharma',
      phone: '+91-9876543210',
      email: 'dance@sunriseschool.edu'
    },
    chiefGuest: 'Ms. Ananya Kapoor, Renowned Choreographer',
    rules: [
      'Max 5 participants per team.',
      'Time limit: 5 minutes.',
      'No explicit content allowed.',
      'Props allowed but must be cleared after use.'
    ],
    tags: ['District Level', 'Dance', 'Competition']
  },
  {
    id: 'event3',
    name: 'Tech Talent Hackathon',
    school: 'Bright Future Academy',
    date: '2025-10-05T09:00:00',
    banner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Collaborate, code, and create in our 12-hour inter-school hackathon focused on social innovation.',
    location: 'Tech Lab, Bright Future Academy',
    category: 'Hackathon / Coding',
    price: '₹100 per team',
    contact: {
      name: 'Mr. Aditya Rao',
      phone: '+91-9000011122',
      email: 'hackathon@brightfuture.edu'
    },
    chiefGuest: 'Mr. Rajeev Arora, CTO of CodeSpark',
    rules: [
      'Teams of 2–4 students only.',
      'Must build a prototype or demo within the 12-hour window.',
      'All code must be written on-site.',
      'Respect the theme: “Tech for Social Good”.'
    ],
    tags: ['Hackathon', 'Tech', 'Coding', 'Innovation']
  }
];

// ✅ Get all events
export const getAllEvents = () => {
  return eventData;
};

// ✅ Get single event by ID
export const getEventById = (id) => {
  return eventData.find(e => e.id === id);
};

// ✅ Add a new event
export const addEvent = (newEvent) => {
  const exists = eventData.some(e => e.id === newEvent.id);
  if (!exists) {
    eventData.push(newEvent);
  }
};

// ✅ Update an event
export const updateEvent = (updatedEvent) => {
  const index = eventData.findIndex(e => e.id === updatedEvent.id);
  if (index !== -1) {
    eventData[index] = { ...eventData[index], ...updatedEvent };
  }
};

// ✅ Delete an event
export const deleteEvent = (id) => {
  eventData = eventData.filter(e => e.id !== id);
};

// ✅ Default export for reference
export default eventData;
