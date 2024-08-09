import React from "react";
import './ProjectVideo.scss';

type Props = {
    children?: React.ReactNode;
    url: string | null;
}

const ProjectVideo: React.FC<Props> = ({ url }) => {

    return(
        <>
            <iframe 
                className="project-video"
                title="Trailer"
                src={`https://www.youtube.com/embed/${url}`} />
        </>
    );
}

export default ProjectVideo;