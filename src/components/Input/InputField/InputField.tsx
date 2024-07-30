import React, { useState, useEffect } from "react";
import './InputField.scss';

type Props = {
    children?: React.ReactNode;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    labelText: string;
    placeholder: string;
    isRequired: boolean;
    type: string;
    isValid?: (mail: string) => boolean;
    value?: string | number;
    pattern?: string;
    name?: string;

}

const InputField: React.FC<Props> = ({ setValue, labelText, placeholder, isRequired, isValid, value, type, pattern, name }) => {

    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)

        setIsEmpty(e.target.value === '');
    
        if (isValid) {
          setIsValidInput(isValid(e.target.value));
        }
    };

    return(
        <>
        <div className="input-field">
            <label htmlFor={name} className="input-field__label">{ labelText }</label>
            <input
                onChange={handleChangeEvent}
                type={type}
                placeholder={placeholder}
                name={name}
                className="input-field__input" />
            { (isRequired && isEmpty) ? <p className="input-field__warning">This field is required</p> : 
                !isValidInput ? <p className="input-field__warning">Email is not valid</p> : null }
        </div>
        </>
    );
}

export default InputField;