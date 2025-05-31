import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountdownTimer from '../components/CountdownTimer';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const EventDetails = () => {
  const { eventId } = useParams();

  // 🔧 Corrected access based on your state structure
  const event = useSelector(state =>
    state.events.find(e => e.id === eventId)
  );

  if (!event) {
    return <div className="text-center text-red-500 mt-10 text-xl">Event not found.</div>;
  }

  const eventDate = new Date(event.date);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-600">
 
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Events</Link>

      <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
        <img
          src={event.banner}
          alt={event.name}
          className="w-full h-72 object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-1">{event.name}</h1>
      <p className="text-sm text-gray-500">{eventDate.toDateString()} • {eventDate.toLocaleTimeString()}</p>
      <p className="text-sm text-gray-600 mb-2">Hosted by: <span className="font-semibold">{event.school}</span></p>

      <CountdownTimer targetDate={event.date} />

      <p className="mt-6 text-lg text-gray-700">{event.description}</p>

      {event.location && (
        <div className="flex items-center mt-4 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" /> {event.location}
        </div>
      )}

      {event.chiefGuest && (
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <User className="w-4 h-4 mr-1" /> Chief Guest: {event.chiefGuest}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {event.category && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Category: {event.category}</span>
        )}
        {event.price && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Entry: {event.price}</span>
        )}
        {event.tags && event.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>

      {event.rules && event.rules.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Rules & Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      {event.contact && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact</h2>
          <div className="text-gray-700 space-y-1 text-sm">
            {event.contact.name && (
              <div className="flex items-center"><User className="w-4 h-4 mr-1" /> {event.contact.name}</div>
            )}
            {event.contact.phone && (
              <div className="flex items-center"><Phone className="w-4 h-4 mr-1" /> {event.contact.phone}</div>
            )}
            {event.contact.email && (
              <div className="flex items-center"><Mail className="w-4 h-4 mr-1" /> {event.contact.email}</div>
            )}
          </div>
        </div>
      )}

      <Link to={`/register/${eventId}`}>
        <button className="bg-green-600 text-white px-4 py-2 mt-6 rounded hover:bg-green-700">
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default EventDetails;
