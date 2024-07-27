// DonatorForm.js
import React, { useState } from 'react';

const DonatorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        donationAmount: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Donator Form</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="donationAmount" className="block text-sm font-medium text-gray-700">Donation Amount</label>
                <input
                    type="number"
                    name="donationAmount"
                    id="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                ></textarea>
            </div>
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Submit</button>
        </form>
    );
};

export default DonatorForm;
