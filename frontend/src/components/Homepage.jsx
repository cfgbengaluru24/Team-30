// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white w-full" style={{ backgroundImage: 'url(src/images/background.png)' }} id="home">
                <div className="bg-black bg-opacity-50 p-6 md:p-10 lg:p-14 xl:p-20 rounded max-w-4xl mx-auto w-full text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Our Shola Trust</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8">
                        "Are people part of nature? We believe they are.
                        What we are doing to the natural world is a reflection of what we are doing to ourselves"
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#collaborators" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600">Collaborators</a>
                        <Link 
                            to="/donator"
                            className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600"
                        >
                            Donator
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                <section className="py-12 md:py-16 lg:py-20 bg-gray-100 w-full" id="about">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-teal-500">Who are we?</h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-800">
                            The Shola Trust is a non-profit, Charitable Trust involved in nature conservation in the Nilgiri region of South India. A group of young people based in Gudalur, at the edge of the Mudumalai Tiger Reserve, who are keen on doing something to protect the natural world around us. Most of us have ‘regular’ jobs, but spend the better part of our time working on conservation. We believe everyone is a wildlife enthusiast, excited at the prospect of seeing an elephant or tiger, and we try to help channel this enthusiasm towards conservation.

                            The Sholas are a unique forest type, endemic to the southern part of the western ghats, and were the inspiration for us to start this organisation, hence the name.
                        </p>
                    </div>
                </section>
                <section className="py-12 md:py-16 lg:py-20 bg-teal-50 w-full" id="services">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-teal-500 text-center">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-teal-500">Service 1</h3>
                                <p className="text-base text-gray-800">Description of the first service offered by Shola Trust. This section should provide details about what the service entails and how it benefits the community or environment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-teal-500">Service 2</h3>
                                <p className="text-base text-gray-800">Description of the second service offered by Shola Trust. This section should provide details about what the service entails and how it benefits the community or environment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-teal-500">Service 3</h3>
                                <p className="text-base text-gray-800">Description of the third service offered by Shola Trust. This section should provide details about what the service entails and how it benefits the community or environment.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-teal-500 text-white py-6">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Get in Touch</p>
                        <p>Email: contact@sholatrust.org</p>
                        <p>Phone: +91 123 456 7890</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Follow Us</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://facebook.com/sholatrust" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Facebook</a>
                            <a href="https://twitter.com/sholatrust" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
                            <a href="https://instagram.com/sholatrust" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">&copy; 2024 Shola Trust. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
