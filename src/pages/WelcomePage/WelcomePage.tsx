import React from "react";
import './WelcomePage.scss'
import Waves from "../../components/Waves/Waves";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton/LinkButton";

const WelcomePage: React.FC = () => {

    const screenWidth = window.innerWidth;

    return(
        <>
        <div id="home" className="welcome-page">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition:{ duration: 0.5 } }}
                viewport={{ once: true }}
                className="welcome-page__content-section">
                <div className="welcome-page__content-section__header">
                    <TypeAnimation
                        sequence={[
                            'We Are', 1000
                        ]}
                        speed={50}
                        style={{ fontSize: screenWidth < 760 ? '30px' : '70px', fontWeight: '600', color: '#000' }}
                        repeat={1}
                        cursor={false}
                        />
                    <TypeAnimation
                        sequence={['Brave Thinkers.', 1500,
                            'Innovative Minds.', 1500,
                            'Creative Spirits.', 1500,
                            'Developers.', 1500]}
                        speed={50}
                        style={{ fontSize: screenWidth < 760 ? '50px' : '100px', fontWeight: '700', color: '#801270' }}
                        repeat={Infinity}
                        />
                </div>
                <p className="welcome-page__content-section__about">
                    Delivering strategic IT solutions with a focus on customer satisfaction, measurable results, and competitive pricing for startups, small to medium-sized businesses.
                </p>
                <LinkButton text="Why Choose Us" redirectTo="#about" />
            </motion.div>
            <div className="welcome-page__waves">
                <Waves />
            </div>
        </div>
        </>
    );
}

export default WelcomePage;