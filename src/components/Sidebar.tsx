import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'About', path: '/about' },
  { icon: Briefcase, label: 'Experience', path: '/experience' },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

interface SidebarProps {
  currentSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection }) => {
  const handleClick = (path: string) => {
    const element = document.getElementById(path.replace('/', '') || 'home');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-8 z-50"
    >
      {navItems.map(({ icon: Icon, label, path }) => (
        <motion.div
          key={path}
          onClick={() => handleClick(path)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-4 mb-6 cursor-pointer group"
        >
          {currentSection === path && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-blue-500/20 rounded-xl"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <Icon
            className={`relative z-10 w-6 h-6 ${
              currentSection === path ? 'text-white' : 'text-gray-400'
            } group-hover:text-white transition-colors`}
          />
          <span className="sr-only">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sidebar;