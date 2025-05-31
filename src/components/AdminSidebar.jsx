import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white h-screen fixed top-0 left-0 shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/admin/events" className="hover:underline">Manage Events</Link>
        <Link to="/admin/registrations" className="hover:underline">Registered Users</Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
