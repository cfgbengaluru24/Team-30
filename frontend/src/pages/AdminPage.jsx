import React from 'react';
import { GetName } from '../controllers/GetRequests';

const AdminPage = () => {
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await GetName();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
    fetchItems()
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-yellow-100 space-y-8">
            <h1 className="text-4xl font-bold text-red-950">Hello! Admin</h1>


      <div className="flex flex-col space-y-4 border border-gray-700 shadow-lg p-4 rounded-lg">
        <button className="bg-green-400 text-white font-bold py-4 px-8 rounded"> 
          Orders
        </button>
        <button className="bg-green-400 text-white font-bold py-4 px-8 rounded">
          Resource Management
        </button>
        <button className="bg-green-400 text-white font-bold py-4 px-8 rounded">
          Site Management
        </button>
        <button className="bg-green-400 text-white font-bold py-4 px-8 rounded">
          Requests
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
