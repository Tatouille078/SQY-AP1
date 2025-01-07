import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Esim from './pages/esim';
import Box from './pages/box';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/esim' element={<Esim />} />
                <Route path='/box' element={<Box />}/>
            </Routes>
        </Router>
    );
}

export default App;
