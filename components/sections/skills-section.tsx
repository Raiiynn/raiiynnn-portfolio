'use client';
import React, { useState, useEffect, useRef } from 'react';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Database } from 'lucide-react';
import { skillsData } from '@/app/data';

const SkillItem = ({ skill, idx }: { skill: { name: string; icon: string; color: string; }; idx: number }) => {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    setYOffset(Math.sin(idx * 0.8) * 40);
  }, [idx]);

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
};


const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section 
        id="skills" 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative py-32 -mt-1 z-20 bg-slate-950 overflow-hidden"
    >
        <div 
            className="pointer-events-none absolute -inset-px transition duration-500"
            style={{
                opacity,
                background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.06), transparent 50%)`
            }}
        />

        <div className="container mx-auto px-6 mb-12 relative z-30">
           <RevealOnScroll>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Database className="text-teal-400" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Tech Stack</h2>
              </div>
              <p className="text-slate-400">Toolkit yang saya gunakan untuk mewujudkan ide.</p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="relative w-full overflow-x-hidden z-30">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-30 pointer-events-none"></div>
          
          <div className="flex group py-12">
            <div className="flex animate-marquee hover:pause-animation">
              {skillsData.concat(skillsData).map((skill, idx) => (
                <SkillItem key={idx} skill={skill} idx={idx} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default SkillsSection;