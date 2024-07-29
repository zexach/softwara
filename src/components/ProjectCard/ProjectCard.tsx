import React, { useState } from "react";
import './ProjectCard.scss'
import { Link } from "react-router-dom";

type Props = {
    children?: React.ReactNode;
    id: number;
    image: string;
    name: string;
    description: string;
}

const ProjectCard: React.FC<Props> = ({ id, image, name, description }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return(
        <>
        <Link to={`/project/${id.toString()}`}>
            <div className="project-card">
                <img onMouseEnter={() => setIsHovered(true)} src={image} alt="project-img" className="project-card__background" />
                { isHovered ? 
                    <div onMouseLeave={() => setIsHovered(false)} className="project-card__info">
                        <div className="project-card__info__content">
                            <h1 className="project-card__info__content__title">{ name }</h1>
                            <p className="project-card__info__content__description">{ description }</p>
                        </div>
                    </div> : null }
            </div>
        </Link>
        </>
    );
}

export default ProjectCard;