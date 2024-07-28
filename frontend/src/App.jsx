import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import AdminPage from './pages/AdminPage';
import './index.css'; // Ensure to import the index.css for Tailwind CSS
import { Routes, Route } from 'react-router-dom';
import SiteManagement from './pages/SiteManagement';
import ResourceManagement from './pages/ResourceManagement';
import DisplayLayout from './ecommerce/DisplayLayout';
import Form from './ecommerce/Form';
import AdminOrders from './pages/AdminOrders';
import Register from './components/Register';
import DonatorFormPage from './components/DonatorFormPage';
import { Helmet } from "react-helmet";
import PredictionPage from "./CostPrediction/PredictionPage"

const App = () => {
  window.embeddedChatbotConfig = {
    chatbotId: "i_tqSm2CJv8nkbDJizp-g",
    domain: "www.chatbase.co"
  }
    return (
        <div className="App">
            <Navbar />
            
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/dashboard" element={<AdminPage />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/SiteManagement" element ={<SiteManagement/>} />
                <Route path="/ResourceManagement" element={<PredictionPage />} />
                <Route path="/DisplayLayout" element={<DisplayLayout />}/>
                <Route path="/Form" element={<Form />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/donator" element={<DonatorFormPage />} />

              </Routes>
              <Helmet>
              <script
                src="https://www.chatbase.co/embed.min.js"
                chatbotId="i_tqSm2CJv8nkbDJizp-g"
                domain="www.chatbase.co"
                defer>
              </script>
        </Helmet>
        </div>
    );
};

export default App;
