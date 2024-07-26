import React from "react";
import './LinkButton.scss';

type Props = {
    children?: React.ReactNode;
    text: string;
    redirectTo: string;
}

const LinkButton: React.FC<Props> = ({ text, redirectTo }) => {

    return(
        <>
        <a href={redirectTo} className="link-button">{ text }</a>
        </>
    );
}

export default LinkButton;