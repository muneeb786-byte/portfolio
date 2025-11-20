import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './ui/Reveal';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold display-font uppercase">Selected <span className='text-[#E31F70]'>Work</span></h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden mb-6 cursor-hover">
                  <div className="aspect-[4/4]  w-full overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full  h-full rounded object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#E31F70] backdrop-blur-sm  px-6 py-3 ">
                      <a href={project.src} target='_blank' className="uppercase tracking-widest text-medium font-bold text-white">View Website</a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start border-t border-black/10 pt-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold display-font mb-1 group-hover:text-gray-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 font-medium">{project.category}</p>
                  </div>
                  <span className="text-sm font-bold border border-black/20 rounded-full px-3 py-1">{project.year}</span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};