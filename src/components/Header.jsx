import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#a1c4fd] via-[#c2e9fb] to-[#b2fefa] text-gray-900 shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50 w-full">
      {/* Logo and Site Title */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <Link to="/" className="text-2xl font-bold text-blue-600">
          School Events
        </Link>
      </div>

      <nav className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
