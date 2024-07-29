import React from "react";
import './ContactPage.scss';
import PageHeader from "../../components/PageHeader/PageHeader";

const ContactPage: React.FC = () => {

    return(
        <>
            <div id="contact" className="contact-page">
                <PageHeader title="Contact Us" />
            </div>
        </>
    );
}

export default ContactPage;