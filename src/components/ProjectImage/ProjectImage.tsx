import React from "react";
import './ProjectImage.scss';

type Props = {
    children?: React.ReactNode;
    image: string;
}

const ProjectImage: React.FC<Props> = ({ image }) => {
    return(
        <>
            <img src={image} alt="project-image" className="project-image" />
        </>
    );
}

export default ProjectImage;