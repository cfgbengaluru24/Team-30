import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center w-full">
            <div className="text-white text-xl font-bold">The Shola Trust</div>
            <ul className="flex space-x-2 md:space-x-4">
                <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
                <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
                <a href="#about" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600">Login</a>
            </ul>
        </nav>
    );
};

export default Navbar;
