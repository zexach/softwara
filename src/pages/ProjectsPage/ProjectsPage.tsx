import React from "react";
import './ProjectsPage.scss';
import WavesUpside from "../../components/Waves/WavesUpside";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Waves from "../../components/Waves/Waves";
import useProjects from '../../assets/projects/projects.json';

const ProjectsPage: React.FC = () => {

    const projects = useProjects;

    return(
        <>
        <div className="projects-page">
            <WavesUpside />
            <div id="projects" className="projects-page__content">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition:{ duration: 1 } }}
                    viewport={{ once: true }}
                    className="projects-page__content__header">Projects</motion.h1>
                <div className="projects-page__content__projects-section">
                    { projects.map((project) => 
                        <ProjectCard key={project.id} image={project.image} name={project.name} description={project.description} /> ) }
                </div>
            </div>
            <Waves />
        </div>
        </>
    );
}

export default ProjectsPage;