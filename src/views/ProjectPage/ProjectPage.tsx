import React from "react";
import './ProjectPage.scss';
import { useParams } from "react-router-dom";

const ProjectPage: React.FC = () => {

    const { id } = useParams();

    return(
        <>
            <div className="project-page">
                { id }
            </div>
        </>
    );
}

export default ProjectPage;