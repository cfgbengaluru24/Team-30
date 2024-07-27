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
    <>
      <h1>Order History</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg mb-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.email}</div>
                <div className="font-bold text-xl mb-2">{item.phone}</div>
                <div className="font-bold text-md mb-2">
                  <ul>
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
          <p>No orders available</p>
        )}
      </div>
    </>
  );
};

export default AdminOrders;
