import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Instalaciones XYZ</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/home" className="text-gray-700 hover:text-gray-900 font-bold">
              Home
            </Link>
            <Link to="/servi" className="text-gray-700 hover:text-gray-900 font-bold">
              Servicios
            </Link>
            <Link to="/contactanos" className="text-gray-700 hover:text-gray-900 font-bold">
              Contacto
            </Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-gray-900 font-bold">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;