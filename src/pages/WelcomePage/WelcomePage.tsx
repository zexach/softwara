import React from "react";
import './WelcomePage.scss'
import Waves from "../../components/Navbar/Waves/Waves";

const WelcomePage: React.FC = () => {

    return(
        <>
        <div className="welcome-page">
            <div className="welcome-page__content-section">
                <h2 className="welcome-page__content-section__about">We are</h2>
                <h1 className="welcome-page__content-section__skills">Brave Thinkers.</h1>
            </div>
            <Waves />
        </div>
        </>
    );
}

export default WelcomePage;