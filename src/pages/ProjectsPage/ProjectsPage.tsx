import React from "react";
import './ProjectsPage.scss';
import WavesUpside from "../../components/Waves/WavesUpside";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Waves1 from "../../components/Waves/Waves1";
import useProjects from '../../assets/projects/projects.json';
import PageHeader from "../../components/PageHeader/PageHeader";

const ProjectsPage: React.FC = () => {

    const projects = useProjects;

    return(
        <>
        <div className="projects-page">
            <WavesUpside />
            <div id="projects" className="projects-page__content">
                <PageHeader title="Projects" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition:{ duration: 1 } }}
                    viewport={{ once: true }}
                    className="projects-page__content__projects-section">
                    { projects.map((project) => 
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            image={project.image}
                            name={project.name}
                            description={project.description} /> ) }
                </motion.div>
            </div>
            <Waves1 />
        </div>
        </>
    );
}

export default ProjectsPage;