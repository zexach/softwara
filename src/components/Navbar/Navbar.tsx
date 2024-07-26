import React from "react";
import './Navbar.scss';

const Navbar: React.FC = () => {

    return(
        <>
        <div className="navbar">
            <div className="navbar__title-section">
                <h1 className="navbar__title-section__title">softwara</h1>
            </div>
            <div className="navbar__pages">
                <a href="#about" className="navbar__pages__page">About us</a>
                <a href="#projects" className="navbar__pages__page">Projects</a>
                <a href="#about" className="navbar__pages__page">Contact</a>
            </div>
        </div>
        </>
    );
}

export default Navbar;