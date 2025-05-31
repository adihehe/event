// src/pages/RegistrationSuccess.jsx
import { useLocation } from 'react-router-dom';

const RegistrationSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Registration Successful!</h2>
      <p className="mb-4">Thank you, <strong>{state?.fullName}</strong> for registering.</p>
      <p><strong>Email:</strong> {state?.email}</p>
      <p><strong>Phone:</strong> {state?.phone}</p>
      <p><strong>School:</strong> {state?.school}</p>
      <p><strong>Class:</strong> {state?.grade}</p>
      <p><strong>Gender:</strong> {state?.gender}</p>
    </div>
  );
};

export default RegistrationSuccess;
