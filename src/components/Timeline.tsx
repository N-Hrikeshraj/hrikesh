import React from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/experience';

const Timeline = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative"
    >
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      {experience.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="ml-12 mb-12 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.2 }}
            className="absolute -left-[3.25rem] top-2 w-4 h-4 rounded-full bg-blue-600"
          />
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600 mb-2">{item.company} | {item.period}</p>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <ul className="list-disc list-inside text-gray-600">
            {item.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline