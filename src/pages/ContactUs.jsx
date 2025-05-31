import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Printer,
} from "lucide-react";
import { contactInfo } from "../data/contactData";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 min-h-screen py-10 px-4 bg-gradient-to-b from-rose-400 via-purple-500 to-blue-600">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black-800">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          {/** Each item uses flex-wrap on small devices for better alignment */}
          <div className="flex items-center space-x-4 flex-wrap">
            <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Address</h2>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Phone</h2>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Email</h2>
              <p className="text-gray-600 break-all">{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <Printer className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Fax</h2>
              <p className="text-gray-600">{contactInfo.fax}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <Globe className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Website</h2>
              <a
                href={contactInfo.website}
                className="text-indigo-600 hover:underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.website}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Office Hours</h2>
              <p className="text-gray-600">{contactInfo.officeHours}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-indigo-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send us a message
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
