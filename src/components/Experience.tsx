import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          Professional Experience
        </motion.h2>
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;