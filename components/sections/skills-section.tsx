'use client';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Database } from 'lucide-react';
import { skillsData } from '@/app/data';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
           <RevealOnScroll>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Database className="text-teal-400" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
              </div>
              <p className="text-slate-400">Toolkit yang saya gunakan untuk mewujudkan ide.</p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee hover:pause-animation">
              {[...skillsData, ...skillsData].map((skill, idx) => {
                const yOffset = Math.sin(idx * 0.8) * 20; 
                
                return (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 mx-6 w-32 h-32 flex flex-col items-center justify-center bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:border-teal-500/50 group-hover:blur-[1px] hover:!blur-0"
                    style={{ transform: `translateY(${yOffset}px)` }}
                  >
                    <div className={`p-3 rounded-2xl mb-2 ${skill.color} bg-opacity-20`}>
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-slate-300">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default SkillsSection;
