import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Heros from './Components/Heros';
import Headers from './Components/Headers';
import Check from './Components/Check';
import Home from './Components/Home';

const App = () => {
    return (
        <div>
            <Router>
                <Headers />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/heros' element={<Heros />} />
                    <Route path='/check' element={<Check />} />
                </Routes>
            </Router>
        </div>
        
    )
}
export default App
