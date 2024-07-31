import React from "react";
import './PortfolioPage.scss'
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Footer from "../components/Footer/Footer";

const PortfolioPage: React.FC = () => {

    return(
        <>
            <div className="portfolio-page">
                <WelcomePage />
                <AboutUsPage />
                <ProjectsPage />
                <ContactPage />
                <Footer />
            </div>
        </>
    );
}

export default PortfolioPage;