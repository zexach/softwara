import React, { useState } from "react";
import './ContactForm.scss';
import TextArea from "../Input/TextArea/TextArea";
import InputField from "../Input/InputField/InputField";
import { emailValidator } from "../../validators/emailValidator";

const ContactForm: React.FC = () => {

    const [mail, setMail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if ( (mail !== '' && emailValidator(mail)) && name !== '' && message !== '' ) {
            console.log(mail);
            console.log(name);
            console.log(message);
        }

    }

    return(
        <>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="contact-form__form" noValidate>
                    <TextArea
                        setValue={setMessage}
                        labelText="Your message"
                        placeholder="Tell us about your project or ask us anything..."
                        isRequired={true} />
                    <div className="contact-form__form__inputs">
                        <InputField
                            setValue={setMail}
                            labelText="Your email"
                            placeholder="john.doe@mail.com"
                            isRequired={true}
                            type="email"
                            name="email"
                            isValid={emailValidator} />
                        <InputField
                            setValue={setName}
                            labelText="Your name"
                            placeholder="John Doe"
                            isRequired={true}
                            type="text"
                            name="text" />
                    </div>
                    <button type="submit" className="contact-form__form__inputs__btn">Submit</button>
                </form>
            </div>
        </>
    );
}

export default ContactForm;