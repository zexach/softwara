import React from "react";
import './ProjectCard.scss'

const ProjectCard: React.FC = () => {

    return(
        <>
        <div className="project-card">
            <img src="https://i.imgur.com/GgBmrZl.png" alt="project-img" className="project-card__background" />
            <div className="project-card__info">
                <h1 className="project-card__info__title">Star Tunes</h1>
            </div>
        </div>
        </>
    );
}

export default ProjectCard;