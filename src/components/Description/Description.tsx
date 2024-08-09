import React from "react";
import './Description.scss';
import { motion } from "framer-motion";

type Props = {
    children?: React.ReactNode;
    text: string;
}

const Description: React.FC<Props> = ({ text }) => {

    return(
        <>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition:{ duration: 1 } }}
                viewport={{ once: true }}
                className="description">{ text }</motion.p>
        </>
    );
}

export default Description;