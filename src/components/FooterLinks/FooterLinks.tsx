import React from "react";
import './FooterLinks.scss';
import { ILink } from "../../models/link";

type Props = {
    children?: React.ReactNode;
    sectionTitle: string;
    links: ILink[]
}

const FooterLinks: React.FC<Props> = ({ sectionTitle, links }) => {

    return(
        <>
        <div className="footer-links">
            <h2 className="footer-links__title">{ sectionTitle }</h2>
            <div className="footer-links__link-section">
                { links.map(link => <a href={`${link.link}`} key={link.link} className="footer-links__link-section__page">{ link.title }</a>) }
            </div>
        </div>
        </>
    );
}

export default FooterLinks;