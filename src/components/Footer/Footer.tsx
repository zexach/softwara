import React from "react";
import './Footer.scss';
import FooterLinks from "../FooterLinks/FooterLinks";
import { ILink } from "../../models/link";

const Footer: React.FC = () => {

    const pages: ILink[] = [
        { title: 'Home', link: '#home' },
        { title: 'About', link: '#about' },
        { title: 'Projects', link: '#projects' },
        { title: 'Contact', link: '#contact' }
    ]

    const emir: ILink[] = [
        { title: 'Linkedin', link: 'https://linkedin.com/in/emir-zambakovic/' },
        { title: 'Github', link: 'https://github.com/zexach' },
    ]

    const muamer: ILink[] = [
        { title: 'Linkedin', link: 'https://www.linkedin.com/in/muamer-alickovic/' },
        { title: 'Github', link: 'https://github.com/mr-am2k' },
    ]

    return(
        <>
            <div className="footer">
                <div className="footer__links">
                    <FooterLinks sectionTitle="Pages" links={pages} />
                    <FooterLinks sectionTitle="Muamer's Socials" links={muamer} />
                    <FooterLinks sectionTitle="Emir's Socials" links={emir} />
                </div>
                
                <h1 className="footer__title">softwara</h1>
            </div>
        </>
    );
}

export default Footer;