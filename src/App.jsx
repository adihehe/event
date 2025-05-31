import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import RegistrationSuccess from './pages/RegistrationSuccess'; // ✅ Import success page
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import Toast styles
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import CreateEventForm from './pages/ManageEvents';
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <>
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/register/:eventId" element={<RegistrationForm />} />
        <Route path="/success" element={<RegistrationSuccess />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/create-event" element={<CreateEventForm />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
