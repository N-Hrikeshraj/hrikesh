import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, title: 'Frontend Development', items: ['React', 'TypeScript', 'TailwindCSS'] },
    { icon: Brain, title: 'Backend Development', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: Palette, title: 'Design', items: ['Figma', 'Adobe XD', 'UI/UX'] },
    { icon: Rocket, title: 'Other', items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            I'm a passionate full-stack developer with over 5 years of experience in building
            web applications. I love creating elegant solutions to complex problems and am
            constantly learning new technologies to stay at the forefront of web development.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me contributing to open-source projects,
            writing technical blog posts, or exploring the latest web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ icon: Icon, title, items }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;