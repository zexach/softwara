import React from "react";
import './ProjectDetails.scss';

type Props = {
    children?: React.ReactNode;
    title: string;
    icon: string;
    details: string[]
}

const ProjectDetails: React.FC<Props> = ({ title, icon, details }) => {
    
    return(
        <>
            <div className="project-details">
                <img src={icon} alt="details" className="project-details__icon" />
                <div className="project-details__content">
                    <h3 className="project-details__content__header">{ title }</h3>
                    <p className="project-details__content__item">{ details.join(", ") }</p>
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;