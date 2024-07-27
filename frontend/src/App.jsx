import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import AdminPage from './pages/AdminPage';
import './index.css'; // Ensure to import the index.css for Tailwind CSS
import { Routes, Route, Router } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/dashboard" element={<AdminPage />} />
              </Routes>

            
        </div>
    );
};

export default App;
