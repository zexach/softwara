import React, { useState, useEffect } from "react";
import './TextArea.scss';

type Props = {
    children?: React.ReactNode;
    placeholder: string;
    isRequired: boolean;
}

const TextArea: React.FC<Props> = ({ placeholder, isRequired }) => {

    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>('');

    useEffect(() => {
        console.log(isEmpty);
    }, [isEmpty])

    return(
        <>
        <div className="text-area">
            <label className="text-area__label">Your message</label>
            <textarea
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
                onBlur={() => { inputText !== '' ? setIsEmpty(false) : setIsEmpty(true) }}
                rows={10}
                cols={100}
                name="message"
                placeholder={placeholder}
                id="message"
                className="text-area__input"></textarea>
            { (isRequired && isEmpty) ? <p className="text-area__warning">This field is required</p> : '' }
        </div>
        </>
    );
}

export default TextArea;