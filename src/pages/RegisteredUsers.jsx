import AdminSidebar from '../components/AdminSidebar';
import { registeredUsers } from '../data/registeredUsers'; // Assume mock list

const RegisteredUsers = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Registered Participants</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Event</th>
                <th className="p-2">School/Class</th>
                <th className="p-2">Contact</th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((user, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.eventName}</td>
                  <td className="p-2">{user.schoolClass}</td>
                  <td className="p-2">{user.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsers;
