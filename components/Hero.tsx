import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { ArrowDownRight } from 'lucide-react';
import { h1 } from 'framer-motion/client';
import { hero } from '@/src/assets';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white pt-24 pb-12 px-6 md:p-0 md:flex md:items-center overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Column: Navigation (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex flex-col justify-start pt-12 w-1/5 pl-8 lg:pl-12 space-y-2 z-20 absolute top-4 left-0 h-full pointer-events-none md:pointer-events-auto"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-2xl font-bold text-black hover:text-gray-500 transition-colors cursor-hover display-font block w-fit pointer-events-auto"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Main Content Wrapper */}
          <div className="flex flex-col md:flex-row w-full md:ml-[20%] md:w-[80%] md:items-center relative">
            
            {/* Image Section 
                Mobile: Order 2 (Between Text and CTA)
                Desktop: Order 1 (Left side of content area)
            */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
               className="order-2 md:order-1 w-full md:w-[55%] aspect-[4/5] md:aspect-[3/4] lg:h-[85vh] lg:w-auto relative z-10 my-8 md:my-0 md:mr-12"
            >
               <div className="relative w-full h-full overflow-hidden bg-gray-200 rounded md:rounded-none group">
                 <img 
                   src={hero} 
                   alt="" 
                   className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 ease-out group-hover:scale-105"
                 />
                 <div className="absolute right-0 top-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-[#E31F70]  text-white p-4">
              <span className="font-bold">Muneeb</span>
            </div>
               </div>
               
          
            </motion.div>

            {/* Right Content Wrapper 
                Mobile: display: contents (Unwraps children so they can be ordered individually)
                Desktop: flex-col (Groups them on the right)
            */}
            <div className="contents md:flex md:flex-col md:justify-center md:order-2 md:w-[45%] md:pr-12 relative z-20">
              
              {/* Title & Description Group 
                  Mobile: Order 1 (Top)
                  Desktop: Order 1 (Top of right column)
              */}
              <div className="order-1 md:order-1 mb-2 md:mb-12">
                 <div className="mb-4 md:mb-8">
                    <motion.h1 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-[8vw] md:text-[2vw] lg:text-[4vw] leading-[1.2] font-extrabold display-font tracking-tighter text-black"
                    >
                      WEB
                      <br />
                      DEVELOPER
                    </motion.h1>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-4 md:mb-0 max-w-sm"
                 >
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                      I'm Muneeb ur Rehman.
                      <br />
                      I'll make Website you want to click.
                    </p>
                 </motion.div>
              </div>

              {/* CTAs Group 
                  Mobile: Order 3 (Bottom)
                  Desktop: Order 2 (Bottom of right column)
              */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6, duration: 0.8 }}
                 className="order-3 md:order-2 flex flex-col items-start gap-6 mt-4 md:mt-12"
              >
                 <a href="#work" className="group flex items-center gap-4 text-3xl md:text-4xl font-bold text-black pb-1 border-b-2 border-black cursor-hover relative">
                    See My Work
                    <ArrowDownRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                 </a>
                 
                 <a href="#portfolio" className="text-3xl md:text-4xl font-bold text-[#E31F70] hover:opacity-80 transition-opacity cursor-hover display-font">
                   Portfolio
                 </a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating "W." Badge (Desktop) */}
      {/* <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center bg-[#1f1f1f] rounded-lg overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="px-4 py-3 border-r border-gray-700">
          <span className="font-bold text-white text-xl font-serif">W.</span>
        </div>
        <div className="flex text-xs font-medium text-gray-400">
          <button className="px-4 py-3 hover:text-white hover:bg-gray-800 transition-colors">Info</button>
          <button className="px-4 py-3 border-l border-gray-800 hover:text-white hover:bg-gray-800 transition-colors">Elements</button>
          <button className="px-4 py-3 border-l border-gray-800 hover:text-white hover:bg-gray-800 transition-colors">Votes</button>
        </div>
        <button className="bg-[#F0E68C] text-black font-bold text-xs px-6 py-3 hover:bg-[#e6da7a] transition-colors">
          Visit Site
        </button>
      </motion.div> */}

      {/* Mobile Decorative Badge (Positioned like screenshot)
      <div className="absolute right-0 top-[55%] md:hidden z-20 pointer-events-none">
         <div className="bg-[#E31F70] text-white py-4 px-2 font-bold uppercase text-[10px] tracking-[0.2em] writing-vertical shadow-lg flex flex-col items-center gap-2 rounded-l-md">
             <span className="transform rotate-180">W.</span>
             <span className="mt-2 transform rotate-180">Nominee</span>
         </div>
      </div> */}

    </section>
  );
};