import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './pages/WelcomePage/WelcomePage';

const App: React.FC = () => {


    return (
        <div className="app">
            <Navbar />
            <WelcomePage />
        </div>
    );
}

export default App;
