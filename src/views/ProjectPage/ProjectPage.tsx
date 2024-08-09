import React, { useEffect } from "react";
import './ProjectPage.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import { useParams } from "react-router-dom";
import { IProject } from "../../models/project";
import useProjects from "../../assets/projects/projects.json"
import ProjectVideo from "../../components/ProjectVideo/ProjectVideo";
import BackButton from "../../components/BackButton/BackButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Description from "../../components/Description/Description";


const ProjectPage: React.FC = () => {

    const { id } = useParams();
    const projectId: number = Number(id) - 1;
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <>
            <div className="project-page">
                <div 
                    style={
                        {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${projects[projectId].backgroundImage})`}
                    }
                    className="project-page__images-section">
                    <div className="project-page__images-section__images">
                        <BackButton />
                        <Carousel
                            responsive={responsive}
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode
                            className=""
                            containerClass="project-page__images-section__images__carousel"
                            dotListClass=""
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
                            slidesToSlide={1}>
                                { projects[projectId].video ? <ProjectVideo url={projects[projectId].videoUrl} /> : null }
                                { projects[projectId].images.map((image) => <ProjectImage key={image} image={image} />) }
                        </Carousel>
                    </div>
                </div>
                <div className="project-page__info-section">
                    <div className="project-page__info-section__title-section">
                        <PageHeader title={projects[projectId].name} />
                        { projects[projectId].workInProgress ? 
                            <p className="project-page__info-section__title-section__wip">Work in progress</p> : null }
                    </div>
                    <Description text={projects[projectId].longDescription} />
                </div>
            </div>
        </>
    );
}

export default ProjectPage;