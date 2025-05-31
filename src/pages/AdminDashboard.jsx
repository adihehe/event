import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const events = useSelector(state => state.events) || [];
  const registrations = useSelector(state => state.registration.users) || [];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/admin/create-event" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Create New Event
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Total Events: {events.length}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(event => (
            <div key={event.id} className="border p-4 rounded shadow">
              <h3 className="font-bold text-lg">{event.name}</h3>
              <p className="text-sm">{event.school}</p>
              <p className="text-sm">📅 {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-sm">📍 {event.location}</p>
              <p className="text-sm">📧 {event.contact?.email}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Registered Users</h2>
        <ul className="divide-y divide-gray-200">
          {registrations.map((user, index) => (
            <li key={index} className="py-2">
              <strong>{user.name}</strong> ({user.school}) – {user.event}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
