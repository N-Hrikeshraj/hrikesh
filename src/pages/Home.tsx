import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-blue-400">John Doe</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer specializing in building exceptional digital experiences
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex space-x-6"
        >
          {[
            { Icon: Github, href: 'https://github.com' },
            { Icon: Linkedin, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:contact@example.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;