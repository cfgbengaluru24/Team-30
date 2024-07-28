import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-950 0 p-4 flex justify-between items-center w-full">
      <div className="text-white text-xl font-bold">The Shola Trust</div>
      <ul className="flex space-x-2 md:space-x-4">
        <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
        <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
        <li className="text-white hover:text-gray-400"><Link to="/Form">Products</Link></li>
        <li className="text-white hover:text-gray-400"><Link to="/admin/dashboard">Admin</Link></li>
        <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        <li>
          <a href="#about" className="bg-black text-white py-2 px-6 rounded hover:bg-teal-600">Login</a>
        </li>
        <li>
          <Link to="/register" className="bg-black text-white py-2 px-6 rounded hover:bg-teal-600">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
