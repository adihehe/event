import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from '../redux/eventSlice';
import NewEventForm from '../components/NewEventForm';

const ManageEvents = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4 font-bold">Manage Events</h2>
      <NewEventForm/>
      {events.map(event => (
        <div key={event.id} className="border p-4 mb-3 rounded shadow">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <p>{event.date}</p>
          <button className="bg-red-500 text-white px-3 py-1 mt-2 rounded" onClick={() => handleDelete(event.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageEvents;
