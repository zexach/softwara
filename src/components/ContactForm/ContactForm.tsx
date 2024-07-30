import React from "react";
import './ContactForm.scss';
import TextArea from "../Input/TextArea/TextArea";
import InputField from "../Input/InputField/InputField";

const ContactForm: React.FC = () => {

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log('submitted');
    }

    return(
        <>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="contact-form__form" noValidate>
                    <TextArea
                        labelText="Your message"
                        placeholder="Tell us about your project or ask us anything..."
                        isRequired={true} />
                    <div className="contact-form__form__inputs">
                        <InputField
                            labelText="Your email"
                            placeholder="john.doe@mail.com"
                            isRequired={true}
                            type="email" />
                        <InputField
                            labelText="Your name"
                            placeholder="John Doe"
                            isRequired={true}
                            type="text" />
                        <button type="submit" className="contact-form__form__inputs__btn">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;