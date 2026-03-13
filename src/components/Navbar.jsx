import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Web Development', href: '#web-development' },
    { name: 'IT Solutions', href: '#it-solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-xl shadow-lg fixed top-0 left-0 right-0 z-50"
    >
      {/* Logo on the left */}
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-12 object-contain"
        />
      </motion.div>

      {/* Navigation links in the center */}
      <ul className="flex space-x-8">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-200"
          >
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </ul>

      {/* Get started button on the right */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#06b6d1',
          boxShadow: '0 0 20px rgba(6, 182, 209, 0.5)',
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: '#2563eb',
        }}
        className="bg-gradient-to-r from-cyan-500 cursor-pointer to-blue-600 text-slate-200 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
      >
        Get started
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;