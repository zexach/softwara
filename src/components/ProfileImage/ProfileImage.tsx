import React, { useState } from "react";
import './ProfileImage.scss';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import githubIcon from '../../assets/icons/github.svg';

type Props = {
    children?: React.ReactNode;
    image: string;
    name: string;
    linkedin: string,
    github: string,
    facebook: string,
    role: string
}

const ProfileImage: React.FC<Props> = ({ image, name, linkedin, github, facebook, role }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return(
        <>
        <div className="profile-image">
            <img onMouseEnter={() => setIsHovered(true)} src={image} alt="profile-pic" className="profile-image__img" />
            { isHovered ? 
                <div onMouseLeave={() => setIsHovered(!isHovered)} className="profile-image__overlay">
                    <div className="profile-image__overlay__socials">
                        <a target="_blank" href={linkedin} className="profile-image__overlay__socials__social">
                            <img src={linkedinIcon} alt="linkedin" />
                        </a>
                        <a target="_blank" href={github} className="profile-image__overlay__socials__social">
                            <img src={githubIcon} alt="github" />
                        </a>
                        <a target="_blank" href={facebook} className="profile-image__overlay__socials__social">
                            <img src={facebookIcon} alt="facebook" />
                        </a>
                    </div>
                </div> : '' } 
                <div className="profile-image__info">
                    <p className="profile-image__info__name">{ name }</p>
                    <p className="profile-image__info__role">{ role }</p>
                </div>
        </div>
        </>
    );
}

export default ProfileImage;