import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addEvent } from '../redux/eventSlice';
import { nanoid } from '@reduxjs/toolkit';

const NewEventForm = () => {
  const dispatch = useDispatch();

  // State for each input field
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [date, setDate] = useState('');
  const [banner, setBanner] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [chiefGuest, setChiefGuest] = useState('');
  const [rules, setRules] = useState('');  // input as comma-separated string
  const [tags, setTags] = useState('');    // input as comma-separated string

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create event object matching your eventdata format
    const newEvent = {
      id: `event-${nanoid(5)}`,
      name,
      school,
      date,
      banner,
      description,
      location,
      category,
      price,
      contact: {
        name: contactName,
        phone: contactPhone,
        email: contactEmail
      },
      chiefGuest,
      rules: rules.split(',').map(rule => rule.trim()).filter(Boolean),  // convert string to array
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    dispatch(addEvent(newEvent));

    // Reset form
    setName('');
    setSchool('');
    setDate('');
    setBanner('');
    setDescription('');
    setLocation('');
    setCategory('');
    setPrice('');
    setContactName('');
    setContactPhone('');
    setContactEmail('');
    setChiefGuest('');
    setRules('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3 max-w-md">
      <input type="text" placeholder="Event name" value={name} onChange={e => setName(e.target.value)} required className="border p-2 w-full" />
      <input type="text" placeholder="School name" value={school} onChange={e => setSchool(e.target.value)} required className="border p-2 w-full" />
      <input type="datetime-local" placeholder="Date and Time" value={date} onChange={e => setDate(e.target.value)} required className="border p-2 w-full" />
      <input type="url" placeholder="Banner URL" value={banner} onChange={e => setBanner(e.target.value)} className="border p-2 w-full" />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Contact Name" value={contactName} onChange={e => setContactName(e.target.value)} className="border p-2 w-full" />
      <input type="tel" placeholder="Contact Phone" value={contactPhone} onChange={e => setContactPhone(e.target.value)} className="border p-2 w-full" />
      <input type="email" placeholder="Contact Email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Chief Guest" value={chiefGuest} onChange={e => setChiefGuest(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Rules (comma separated)" value={rules} onChange={e => setRules(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Add Event</button>
    </form>
  );
};

export default NewEventForm;
