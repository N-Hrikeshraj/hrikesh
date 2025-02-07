import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Github, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Back button */}
      <div className="fixed top-0 left-0 p-8 z-50">
        <Link to="/projects">
          <motion.button
            whileHover={{ x: -10 }}
            className="flex items-center text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
          >
            <ArrowLeft className="mr-2" />
            Back to Projects
          </motion.button>
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-16"
        >
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Overview section */}
          <section id="overview" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {/* Timeline section */}
          {project.startDate && (
            <section id="timeline" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Project Timeline</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-32 font-semibold">Start Date:</div>
                  <div>{project.startDate}</div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-32 font-semibold">Duration:</div>
                  <div>{project.duration}</div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-semibold">Status:</div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {project.status}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Goals section */}
          {project.projectGoals && (
            <section id="goals" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Project Goals</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Primary Objectives</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {project.projectGoals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Methodology section */}
          <section id="methodology" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Methodology</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 mb-6">
                {project.solution}
              </p>
              {project.methodologyImage && (
                <img
                  src={project.methodologyImage}
                  alt="Project Methodology"
                  className="w-full rounded-lg mb-6"
                />
              )}
              {project.techStack && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.techStack.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Development Approach</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.techStack.approach.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Challenges section */}
          <section id="challenges" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
                <p className="text-gray-600 mb-4">{project.challenge}</p>
              </div>
            </div>
          </section>

          {/* Results section */}
          <section id="results" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 mb-6">{project.outcome}</p>

              {project.resultImage && (
                <img
                  src={project.resultImage}
                  alt="Project Results"
                  className="w-full rounded-lg mb-6"
                />
              )}

              {/* Performance Metrics */}
              {project.performanceMetrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {project.performanceMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-gray-800 font-medium mb-2">
                        {metric.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
            </div>
          </section>

          {/* Links section */}
          <div className="flex gap-4 pt-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Globe className="mr-2" />
                Visit Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ y: -5 }}
      >
        <ChevronUp />
      </motion.button>
    </motion.div>
  );
};

export default ProjectDetail;