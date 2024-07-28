import React, { useState, useEffect } from "react";
import { GetOrders } from "../controllers/GetRequests"; // Adjust the import path accordingly

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await GetOrders();
        setOrders(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Order History</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-700">{item.email}</div>
                <div className="text-lg mb-2 text-green-600">{item.phone}</div>
                <div className="text-md mb-2">
                  <ul className="list-disc list-inside text-green-600">
                    {Object.entries(item.order).map(([key, value]) => (
                      <li key={key}>
                        {key} x {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders available</p>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
