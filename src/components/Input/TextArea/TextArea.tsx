import React, { useState } from "react";
import './TextArea.scss';

type Props = {
    children?: React.ReactNode;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    labelText: string
    placeholder: string;
    value: string;
    isRequired: boolean;
}

const TextArea: React.FC<Props> = ({ setValue, labelText, placeholder, value, isRequired }) => {

    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const handleChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(e.target.value);
        if (e.target.value === '') setIsEmpty(true);
        else setIsEmpty(false);
    }

    return(
        <>
        <div className="text-area">
            <label className="text-area__label">{ labelText }</label>
            <textarea
                onChange={handleChangeEvent}
                name="message"
                placeholder={placeholder}
                value={value}
                id="message"
                className="text-area__input"></textarea>
            { (isRequired && isEmpty) ? <p className="text-area__warning">This field is required</p> : '' }
        </div>
        </>
    );
}

export default TextArea;