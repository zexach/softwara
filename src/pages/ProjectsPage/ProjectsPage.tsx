import React from "react";
import './ProjectsPage.scss';
import WavesUpside from "../../components/Waves/WavesUpside";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {

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

            </div>
        </div>
        </>
    );
}

export default ProjectsPage;