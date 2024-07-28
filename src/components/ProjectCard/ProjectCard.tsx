import React, { useState } from "react";
import './ProjectCard.scss'

type Props = {
    children?: React.ReactNode;
    image: string;
    name: string;
    description: string;
}

const ProjectCard: React.FC<Props> = ({ image, name, description }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return(
        <>
        <div className="project-card">
            <img onMouseEnter={() => setIsHovered(true)} src={image} alt="project-img" className="project-card__background" />
            { isHovered ? 
                <div onMouseLeave={() => setIsHovered(!isHovered)} className="project-card__info">
                    <div className="project-card__info__content">
                        <h1 className="project-card__info__content__title">{ name }</h1>
                        <p className="project-card__info__content__description">{ description }</p>
                    </div>
                </div> : '' }
        </div>
        </>
    );
}

export default ProjectCard;