import React from "react";
import './ProjectPage.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import { useParams } from "react-router-dom";
import { IProject } from "../../models/project";
import useProjects from "../../assets/projects/projects.json"


const ProjectPage: React.FC = () => {

    const { id } = useParams();
    const projectId: number = Number(id);
    const projects: IProject[] = useProjects;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return(
        <>
            <div className="project-page">
                <div style={{backgroundImage: `url(${projects[projectId].backgroundImage})`}} className="project-page__images-section">
                    <div className="project-page__images-section__images">
                        <Carousel
                            responsive={responsive}
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode
                            className=""
                            containerClass="project-page__images-section__images__carousel"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass="project-page__images-section__images__carousel__items"
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable>
                                { projects[projectId].images.map((image) => <ProjectImage key={image} image={image} />) }
                        </Carousel>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectPage;