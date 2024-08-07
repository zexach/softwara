import React from "react";
import './ProjectPage.scss';
import useProjects from "../../assets/projects/projects.json"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useParams } from "react-router-dom";
import { IProject } from "../../models/project";
import ProjectImage from "../../components/ProjectImage/ProjectImage";


const ProjectPage: React.FC = () => {

    const { id } = useParams();
    const projectId: number = Number(id);
    const projects: IProject[] = useProjects;

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <>
            <div className="project-page">
                <div style={{backgroundImage: `url(${projects[projectId].image})`}} className="project-page__images-section">
                    <div className="project-page__images-section__images">
                    <Carousel
                        responsive={responsive}
                        showDots={true  }
                        infinite
                        arrows
                        swipeable>
                        <ProjectImage image={projects[projectId].image} />
                        <ProjectImage image={projects[projectId].image} />
                        <ProjectImage image={projects[projectId].image} />
                    </Carousel>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectPage;