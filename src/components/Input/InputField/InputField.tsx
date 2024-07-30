import React, { useState } from "react";
import './InputField.scss';

type Props = {
    children?: React.ReactNode;
    labelText: string;
    placeholder: string;
    isRequired: boolean;
    value?: string | number;
    type: string;
    pattern?: string;
    name?: string;

}

const InputField: React.FC<Props> = ({ labelText, placeholder, isRequired, value, type, pattern, name }) => {

    const [inputText, setInputText] = useState<string>('');
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    return(
        <>
        <div className="input-field">
            <label htmlFor={name} className="input-field__label">{ labelText }</label>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                onBlur={() => { inputText !== '' ? setIsEmpty(false) : setIsEmpty(true) }}
                type={type}
                placeholder={placeholder}
                className="input-field__input" />
            { isEmpty ? <p className="input-field__warning">This field is required</p> : null }
        </div>
        </>
    );
}

export default InputField;