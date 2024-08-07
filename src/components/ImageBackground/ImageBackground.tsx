import React from "react";
import './ImageBackground.scss';

type Props = {
    children?: React.ReactNode;
    image: string;
}

const ImageBackground: React.FC<Props> = ({ image }) => {

    return(
        <>
            <img src={image} alt="background" className="image-background" />
        </>
    );
}

export default ImageBackground;