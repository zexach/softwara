import React from "react";
import './ContactPage.scss';
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import { motion } from "framer-motion";
import { sendEmail } from "../../services/contactService";

const ContactPage: React.FC = () => {

    return(
        <>
            <div id="contact" className="contact-page">
                <PageHeader title="Contact Us" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition:{ duration: 1 } }}
                    viewport={{ once: true }}
                    className="contact-page__content">
                    <div className="contact-page__content__info">
                        <h1 className="contact-page__content__info__header">Get in Touch</h1>
                        <p className="contact-page__content__info__desc">Whether you're interested in working together or just want to say hello, send us a message below.</p>
                    </div>
                    <ContactForm onSubmitMail={sendEmail} />
                </motion.div>
            </div>
        </>
    );
}

export default ContactPage;