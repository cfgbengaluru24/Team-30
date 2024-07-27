import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Product 4', price: '$40', image: 'path/to/image4.jpg' },
    { id: 5, name: 'Product 5', price: '$50', image: 'path/to/image5.jpg' },
    { id: 6, name: 'Product 6', price: '$60', image: 'path/to/image6.jpg' },
    { id: 7, name: 'Product 7', price: '$70', image: 'path/to/image7.jpg' },
    { id: 8, name: 'Product 8', price: '$80', image: 'path/to/image8.jpg' },
    // Add more products as needed
];

const DisplayLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Product Grid</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                    <p className="mt-1 text-gray-600">{product.price}</p>
                    <Link to="/Form">
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            Order
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
};

export default DisplayLayout;
