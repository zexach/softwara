import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

const App: React.FC = () => {


    return (
        <div className="app">
            <Navbar />
            <WelcomePage />
            <AboutUsPage />
        </div>
    );
}

export default App;
