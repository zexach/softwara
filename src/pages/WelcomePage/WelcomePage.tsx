import React from "react";
import './WelcomePage.scss'
import Waves from "../../components/Navbar/Waves/Waves";
import { TypeAnimation } from "react-type-animation";

const WelcomePage: React.FC = () => {

    return(
        <>
        <div className="welcome-page">
            <div className="welcome-page__content-section">
                <TypeAnimation
                    sequence={[
                        'We Are', 1000
                    ]}
                    speed={50}
                    style={{ fontSize: '70px', fontWeight: '600', color: '#000' }}
                    repeat={1}
                    cursor={false}
                    />
                <TypeAnimation
                    sequence={[
                        'Brave Thinkers.',
                        1500,
                        'Innovative Minds.',
                        1500,
                        'Creative Spirits.',
                        1500,
                        'Developers.',
                        1500,
                    ]}
                    speed={50}
                    style={{ fontSize: '100px', fontWeight: '700', color: '#801270' }}
                    repeat={Infinity}
                    />
                <p className="welcome-page__content-section__about">
                Delivering strategic IT solutions with a focus on customer satisfaction, measurable results, and competitive pricing for startups, small to medium-sized businesses.
                </p>
            </div>
            <div className="welcome-page__waves">
                <Waves />
            </div>
        </div>
        </>
    );
}

export default WelcomePage;