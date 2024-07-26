import React from "react";
import './AboutUsPage.scss'
import KeyMetric from "../../components/KeyMetrics/KeyMetric";

const AboutUsPage: React.FC = () => {

    return(
        <>
        <div id='about' className="about-us-page">
            <h1 className="about-us-page__header">About us</h1>
            <div className="about-us-page__content">
                <p className="about-us-page__content__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="about-us-page__content__metrics">
                    <h2 className="about-us-page__content__metrics__header">By the Numbers</h2>
                    <div className="about-us-page__content__metrics__metrics">
                        <KeyMetric text="Projects done" number={5} cca={false} />
                        <KeyMetric text="Years of experience" number={3} cca={true} />
                        <KeyMetric text="Team members" number={2} cca={false} />
                        <KeyMetric text="Lines of Code" number={50000} cca={true} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUsPage;