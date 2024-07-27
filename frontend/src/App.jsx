import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import './index.css'; // Ensure to import the index.css for Tailwind CSS

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
        </div>
    );
};

export default App;
