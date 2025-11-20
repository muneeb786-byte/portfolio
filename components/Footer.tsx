import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowDownRight } from 'lucide-react';
import { herofoot } from '@/src/assets';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-black py-24 px-6 md:px-12 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-12">
          <Reveal>
            <h2 className="text-[15vw] md:text-[10vw] leading-[0.9] font-bold display-font tracking-tighter">
              Nice to <span className="serif-font italic font-light text-[#E31F70]">meet</span>
            </h2>
          </Reveal>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
             <Reveal delay={0.2}>
               <p className="text-gray-500 text-sm md:text-base font-medium">
                 Located in Pakistan. Online — near you.
               </p>
             </Reveal>
             
             <Reveal delay={0.3}>
               <a 
                 href="#" 
                 className="group flex items-center gap-2 text-xl md:text-2xl font-bold border-b-2 border-black pb-1 hover:text-[#E31F70] hover:border-[#E31F70] transition-colors cursor-hover"
               >
                 My CV
                 <ArrowDownRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
               </a>
             </Reveal>
          </div>
        </div>

        {/* Main Image Section */}
        <Reveal delay={0.4} width="100%">
          <div className="relative w-full aspect-[3/4] md:aspect-[16/10] bg-gray-100 overflow-hidden mb-16 group">
            <img 
            src={herofoot}
              alt="Portrait" 
              className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            
            {/* W. Badge mimic */}
            <div className="absolute right-0 top-[40%] translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-[#111] text-white p-4">
              <span className="font-bold">Muneeb</span>
            </div>
          </div>
        </Reveal>

        {/* Bottom Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
             <Reveal delay={0.5}>
               <a href="mailto:shhchebet@gmail.com" className="block text-2xl md:text-3xl font-bold hover:text-[#E31F70] transition-colors cursor-hover mb-6">
                 muneebrahman28185@gmail.com
               </a>
             </Reveal>
             
             <Reveal delay={0.6}>
               <div className="flex gap-8">
                  {['Ln.', 'Gh.', 'In.'].map((social) => (
                    <a 
                      key={social} 
                      href="https://www.linkedin.com/in/muneeb-ur-rehman-3aa98a27a/" 
                      className="text-2xl font-bold font-serif hover:text-[#E31F70] transition-colors cursor-hover"
                    >
                      {social}
                    </a>
                  ))}
               </div>
             </Reveal>
          </div>
          
          <Reveal delay={0.7}>
            <p className="text-xs text-gray-400 font-medium">
              © 2025
            </p>
          </Reveal>
        </div>

      </div>
    </footer>
  );
};