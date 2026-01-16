'use client';

import { motion } from 'framer-motion';

export function HamburgerMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='relative size-6 focus:outline-none group'
      aria-label='Toggle menu'
    >
      <div className='absolute inset-0 flex flex-col justify-center space-y-1'>
        <motion.span
          className='block h-0.5 bg-foreground transition-all duration-300 ease-in-out group-hover:bg-primary'
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className='block h-0.5 bg-foreground transition-all duration-300 ease-in-out group-hover:bg-primary'
          animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -10 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className='block h-0.5 bg-foreground transition-all duration-300 ease-in-out group-hover:bg-primary'
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </button>
  );
}
