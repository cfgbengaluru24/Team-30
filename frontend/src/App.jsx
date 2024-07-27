// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import AdminPage from "./pages/AdminPage";
import AdminOrders from "./pages/AdminOrders";
import Register from './components/Register';
import DonatorFormPage from './components/DonatorFormPage'; // Ensure the path is correct
import { Helmet } from "react-helmet";
import "./index.css"; // Ensure to import the index.css for Tailwind CSS

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
          <Route path="/register" element={<Register />} />
          <Route path="/donator" element={<DonatorFormPage />} /> {/* Added Donator form route */}
        </Routes>
        <Helmet>
          <script
            src="https://www.chatbase.co/embed.min.js"
            chatbotId="i_tqSm2CJv8nkbDJizp-g"
            domain="www.chatbase.co"
            defer
          ></script>
        </Helmet>
      </div>
  );
};

export default App;

