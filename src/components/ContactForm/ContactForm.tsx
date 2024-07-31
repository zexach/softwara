import React, { useState, useEffect } from "react";
import './ContactForm.scss';
import TextArea from "../Input/TextArea/TextArea";
import InputField from "../Input/InputField/InputField";
import { emailValidator } from "../../validators/emailValidator";
import Spinner from "../Spinner/Spinner";

type Props = {
    children?: React. ReactNode;
    onSubmitMail: (
        e: React.FormEvent,
        mail: string,
        name: string,
        message: string,
        isSent: React.Dispatch<React.SetStateAction<boolean>>,
        setMail: React.Dispatch<React.SetStateAction<string>>,
        setName: React.Dispatch<React.SetStateAction<string>>,
        setMessage: React.Dispatch<React.SetStateAction<string>>
    ) => void;
}

const ContactForm: React.FC<Props> = ({ onSubmitMail }) => {

    const [mail, setMail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [isMailSent, setIsMailSent] = useState(true);

    const handleSubmit = (e: React.FormEvent): void => {
        onSubmitMail(e, mail, name, message, setIsMailSent, setMail, setName, setMessage);
    }

    return(
        <>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="contact-form__form" noValidate>
                    <TextArea
                        setValue={setMessage}
                        labelText="Your message"
                        placeholder="Tell us about your project or ask us anything..."
                        value={message}
                        isRequired={true} />
                    <div className="contact-form__form__inputs">
                        <InputField
                            setValue={setMail}
                            labelText="Your email"
                            placeholder="john.doe@mail.com"
                            isRequired={true}
                            type="email"
                            name="email"
                            value={mail}
                            isValid={emailValidator} />
                        <InputField
                            setValue={setName}
                            labelText="Your name"
                            placeholder="John Doe"
                            isRequired={true}
                            type="text"
                            name="text"
                            value={name} />
                    </div>
                    <div className="contact-form__form__button">
                        { isMailSent ? 
                            <button
                                type="submit"
                                className="contact-form__form__button__btn"
                                >Submit</button>
                            : <Spinner /> }
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;