'use client';
import React, { useState, useRef } from 'react';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '@/app/data';

const ContactSection = () => {
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
        id="contact" 
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
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-30 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Let's Collaborate</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
              Have an interesting idea or want to discuss a project? I'm always open to new opportunities.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="flex justify-center gap-6 md:gap-10 mb-16">
              {[
                { icon: Github, label: "GitHub", href: personalData.contact.github, color: "hover:text-white hover:bg-slate-800" },
                { icon: Linkedin, label: "LinkedIn", href: personalData.contact.linkedin, color: "hover:text-blue-400 hover:bg-blue-900/20" },
                { icon: Mail, label: "Email", href: `mailto:${personalData.contact.email}`, color: "hover:text-teal-400 hover:bg-teal-900/20" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`group flex flex-col items-center gap-3 text-slate-400 transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className={`p-5 rounded-2xl border border-slate-700 bg-slate-800/50 transition-all ${social.color} relative z-40 shadow-lg`}>
                    <social.icon size={32} />
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </RevealOnScroll>
          
          <div className="border-t border-slate-800 pt-8 mt-8">
            <p className="text-slate-500 text-sm">
            </p>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;