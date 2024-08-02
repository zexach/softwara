import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import PortfolioPage from './views/PortfolioPage/PortfolioPage';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './views/ProjectPage/ProjectPage';

const App: React.FC = () => {


    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path='/' element={<PortfolioPage />} />
                <Route path='/project/:id' element={<ProjectPage />} />
            </Routes>
        </div>
    );
}

export default App;
