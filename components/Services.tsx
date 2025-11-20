import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="container mx-auto">
        <Reveal>
           <h2 className="text-4xl md:text-6xl font-bold display-font uppercase mb-20">My <span className='serif-font italic text-[#E31F70] tracking-wide'>Expertise</span></h2>
        </Reveal>

        <div className="flex flex-col">
          {SERVICES.map((service) => (
            <div key={service.id} className="group border-t border-black/10 py-12 md:py-16 transition-colors duration-300  cursor-hover">
              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 text-[#E31F70] font-mono ">0{service.id}</div>
                  
                  <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-bold display-font mb-4">{service.title}</h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold uppercase tracking-wider border border-black/10 px-3 py-1 rounded-full bg-transparent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <ArrowUpRight className="w-10 h-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 opacity-20 group-hover:opacity-100 group-hover:text-[#E31F70]" />
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  );
};