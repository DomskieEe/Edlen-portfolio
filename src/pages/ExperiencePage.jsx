import React from 'react';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '120px' }}
        >
            <Experience />
        </motion.div>
    );
};

export default ExperiencePage;
