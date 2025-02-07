import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 order-2 md:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4"
              >
                Mechatronics Engineer
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Hrikeshraj Nadaraj
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-lg"
              >
                Crafting exceptional technical products through innovative solutions
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                {[
                  { Icon: Github, href: 'https://github.com/N-Hrikeshraj', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/hrikeshraj/', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:hnadaraj@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-6" />
                
                {/* Main image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 p-1"
                >
                  <img
                    src="https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/profile1.JPG"
                    alt="Hrikeshraj Nadaraj"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
