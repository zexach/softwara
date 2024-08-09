import React from "react";
import './AboutUsPage.scss'
import KeyMetric from "../../components/KeyMetrics/KeyMetric";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { motion } from "framer-motion";
import useMetrics from '../../assets/metrics/metrics.json';
import useTeam from '../../assets/team/team.json'
import PageHeader from "../../components/PageHeader/PageHeader";
import Description from "../../components/Description/Description";

const AboutUsPage: React.FC = () => {

    const metrics = useMetrics;
    const team = useTeam;

    return(
        <>
        <div
            id='about'
            className="about-us-page">
            <PageHeader title="About Us" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition:{ duration: 1 } }}
                viewport={{ once: true }}
                className="about-us-page__content">
                <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <div className="about-us-page__content__metrics">
                    <h2 className="about-us-page__content__metrics__header">By the Numbers</h2>
                    <div className="about-us-page__content__metrics__metrics">
                        { metrics.map((metric) =>  <KeyMetric key={metric.id} text={metric.name} number={metric.number} cca={metric.cca} />) }
                    </div>
                </div>
                <div className="about-us-page__content__team">
                    <h2 className="about-us-page__content__team__header">Meet the Team</h2>
                    <div className="about-us-page__content__team__members">
                        { team.map((member) => 
                            <ProfileImage
                                key={member.id}
                                image={member.image}
                                name={member.name}
                                linkedin={member.linkedin}
                                github={member.github}
                                facebook={member.facebook}
                                role={member.role} />) }
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    );
}

export default AboutUsPage;