import React from "react";
import './TextArea.scss';

type Props = {
    children?: React.ReactNode;
    placeholder: string;
    isRequired: boolean;
}

const TextArea: React.FC<Props> = ({ placeholder, isRequired }) => {

    return(
        <>
        <div className="text-area">
            <label className="text-area__label">Your message</label>
            <textarea
                rows={10}
                cols={100}
                name="message"
                placeholder={placeholder}
                id="message"
                className="text-area__input"></textarea>
        </div>
        </>
    );
}

export default TextArea;