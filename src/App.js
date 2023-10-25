import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Heros from './Components/Heros';
import Headers from './Components/Headers';
import Check from './Components/Check';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import News from './Components/News';
import AssessmentPage from './Components/AssessmentPage';
import User_Login from './Components/User_Login';
import Docs from './Components/Docs';
import Profile from './Components/Profile';

const App = () => {
    return (
        <div>
            <Router>
                <Headers />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/news' element={<News/>} />                    <Route path='/questions' element={<AssessmentPage/>} />
                    <Route path='/loginsignup' element={<User_Login/>} />
                    <Route path='/docs' element={<Docs />}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </Router>
        </div>
        
    )
}
export default App
