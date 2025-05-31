import { Link } from 'react-router-dom';
import CountdownTimer from './CountDownTimer';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl ">
      <div className="relative">
        <img
          src={event.banner}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        {/* Price badge */}
        <span className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
          {event.price}
        </span>
        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
          {event.category}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">
          {new Date(event.date).toLocaleString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </p>

        <h2 className="text-lg font-semibold text-gray-900">{event.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{event.school}</p>

       <CountdownTimer targetDate={new Date(event.date)} />


        <Link to={`/events/${event.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 text-sm rounded-lg hover:bg-blue-700 transition">
            View Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
