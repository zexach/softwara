import React from "react";
import './BackButton.scss';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {

    const navigate = useNavigate();

    return(
        <>
        <div onClick={() => navigate(-1)} className="back-button">
            <img src={arrowLeft} alt="arrow" className="back-button__icon" />
            <p className="back-button__text">Back</p>
        </div>
        </>
    );
}

export default BackButton;