// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PersonalityType from './pages/PersonalityType';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personality" element={<PersonalityType />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
