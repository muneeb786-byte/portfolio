import React from 'react';
import { motion } from 'framer-motion';

export const Marquee: React.FC = () => {
  return (
    <div className="w-full py-6 md:py-12 overflow-hidden bg-[#111] text-[#EAEAEA]">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
            <span className="md:text-4xl text-2xl  font-bold display-font uppercase opacity-50">Strategy</span>
            <span className="w-4 h-4 rounded-full bg-white"></span>
            <span className="md:text-4xl text-2xl  font-bold display-font uppercase">Design</span>
            <span className="w-4 h-4 rounded-full bg-white"></span>
            <span className=" md:text-4xl text-2xl  font-bold display-font uppercase opacity-50">Development</span>
            <span className="w-4 h-4 rounded-full bg-white"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};