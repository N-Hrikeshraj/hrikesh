import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <Link to={`/projects/${project.id}`}>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center text-blue-600 font-semibold"
          >
            View Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard