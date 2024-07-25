import React from "react";
import './Navbar.scss';

const Navbar: React.FC = () => {

    return(
        <>
        <div className="navbar">
            <div className="navbar__title-section">
                <p className="navbar__title-section__title">softwara</p>
            </div>
            <div className="navbar__pages">
                <p className="navbar__pages__page">About us</p>
                <p className="navbar__pages__page">Projects</p>
                <p className="navbar__pages__page">Contact</p>
            </div>
        </div>
        </>
    );
}

export default Navbar;