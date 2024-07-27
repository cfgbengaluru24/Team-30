import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import AdminPage from './pages/AdminPage';
import './index.css'; // Ensure to import the index.css for Tailwind CSS
import { Routes, Route, Router } from 'react-router-dom';
import SiteManagement from './pages/SiteManagement';
import ResourceManagement from './pages/ResourceManagement';
import DisplayLayout from './ecommerce/DisplayLayout';
import Form from './ecommerce/Form';

const App = () => {
    return (
        <div className="App">
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/dashboard" element={<AdminPage />} />
                <Route path="/SiteManagement" element ={<SiteManagement/>} />
                <Route path="/ResourceManagement" element={<ResourceManagement />} />
                <Route path="/DisplayLayout" element={<DisplayLayout />}/>
                <Route path="/Form" element={<Form />} />
              </Routes>

            
        </div>
    );
};

export default App;
