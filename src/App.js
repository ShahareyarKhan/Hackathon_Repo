import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Heros from './Components/Heros';
import Headers from './Components/Headers';
import Check from './Components/Check';

const App = () => {
    return (
        <>
            <Router>
                <Headers />
                <Routes>
                    <Route path='/heros' element={<Heros />} />
                    <Route path='/check' element={<Check />} />
                </Routes>
            </Router>
        </>
    )
}
export default App
