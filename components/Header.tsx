import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header Bar - Always on top */}
      <header className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 flex justify-end md:hidden pointer-events-none">
        <button 
          className="cursor-hover relative z-[100] pointer-events-auto mix-blend-difference text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111] text-white z-[90] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item, index) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl display-font font-bold cursor-hover hover:text-[#E31F70] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};