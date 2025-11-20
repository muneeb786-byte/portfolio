import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  ['#UserInterfaceDesign', '#UserExperienceDesign', '#Figma', '#Framer'],
  ['#WebDesign', '#MobileAppDesign', '#Prototyping', '#Wireframing'],
  ['#CleanDesign', '#AestheticDesign', '#LuxuryDesign']
];

export const Skills: React.FC = () => {
  return (
    <section className="bg-[#111] py-24 border-t border-white/10 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-12 md:mb-16 text-center">
         <span className="serif-font italic text-[#E31F70] text-2xl md:text-4xl tracking-wider">
            My Services
         </span>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 w-full">
        {SKILLS.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full overflow-hidden flex">
             <motion.div
               className="flex whitespace-nowrap gap-8 md:gap-16 px-4 min-w-full"
               initial={{ x: rowIndex % 2 === 0 ? "0%" : "-50%" }}
               animate={{
                 x: rowIndex % 2 === 0 ? "-50%" : "0%"
               }}
               transition={{
                 repeat: Infinity,
                 duration: 25 + (rowIndex * 5), // Varying speeds for dynamic effect
                 ease: "linear"
               }}
             >
                {/* Quadruple content to ensure gapless infinite scroll on large screens */}
                {[...row, ...row, ...row, ...row, ...row, ...row].map((skill, i) => (
                   <span 
                    key={i} 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold display-font text-[#EAEAEA] opacity-90 hover:opacity-100 hover:text-[#E31F70] transition-all duration-300 cursor-hover select-none"
                   >
                      {skill}
                   </span>
                ))}
             </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};