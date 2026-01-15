'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LanguageSelector } from './language-selector';
import { NavbarLogo } from './navbar-logo';

export function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/20 border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-3 items-center h-16 lg:h-20'>
          {/* Left: Hamburger Menu & Contact Info */}
          <div className='flex items-center justify-start gap-4'></div>
          <NavbarLogo setIsScrolled={setIsScrolled} />
        </div>
      </div>

      <LanguageSelector />
    </motion.header>
  );
}
