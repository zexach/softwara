import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import PortfolioPage from './views/PortfolioPage';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {


    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path='/' element={<PortfolioPage />} />
            </Routes>
        </div>
    );
}

export default App;
