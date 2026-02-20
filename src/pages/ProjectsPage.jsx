import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '120px' }}
        >
            <Projects />
        </motion.div>
    );
};

export default ProjectsPage;
