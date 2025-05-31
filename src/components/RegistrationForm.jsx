// src/components/RegistrationForm.jsx
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/registrationSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isUserRegisteredForEvent } from '../data/registeredUsers'; // Function to check if user is already registered
import { useParams } from 'react-router-dom'; // For accessing eventId from URL

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    school: '',
    grade: '',
    gender: '',
    guardianContact: '',
  });

  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const requiredFields = ['fullName', 'email', 'phone', 'school', 'grade', 'gender'];
  const emptyField = requiredFields.find(field => !formData[field]?.trim());

  if (emptyField) {
    toast.error(`Please fill out the ${emptyField} field.`);
    return;
  }

  if (isUserRegisteredForEvent(formData.email, eventId)) {
    toast.error('You have already registered for this event.');
    return;
  }

  dispatch(registerUser({ ...formData, eventId }));
  toast.success('Registration successful!');
  navigate("/success")
};

return (
  <div className="max-w-xl mx-auto p-8 rounded-xl shadow-2xl bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-600">
    <h2 className="text-3xl font-extrabold text-center text-green-800 mb-8 drop-shadow-md">
      🎉 Register for Event
    </h2>
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="text"
        name="school"
        placeholder="School Name"
        onChange={handleChange}
      />
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="text"
        name="grade"
        placeholder="Class / Grade"
        onChange={handleChange}
      />
      <select
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-600"
        name="gender"
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        className="w-full p-3 rounded-lg bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-600"
        type="text"
        name="guardianContact"
        placeholder="Guardian Contact (Optional)"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  </div>
);
};

export default RegistrationForm;
