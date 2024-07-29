import React from "react";
import './ContactForm.scss';
import TextArea from "../Input/TextArea/TextArea";

const ContactForm: React.FC = () => {

    return(

        <>
            <div className="contact-form">
                <TextArea placeholder="Tell us about your project or ask us anything..." isRequired={true} />
            </div>
        </>
    );
}

export default ContactForm;