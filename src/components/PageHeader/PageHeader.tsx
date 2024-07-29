import React from "react";
import './PageHeader.scss';
import { motion } from "framer-motion";

type Props = {
    children?: React.ReactNode;
    title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
    
    return(
        <>
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition:{ duration: 1 } }}
            viewport={{ once: true }}
            className="page-header">{ title }</motion.h1>
        </>
    );
}

export default PageHeader;