'use client';
import React, { useState, useRef } from 'react';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Globe } from 'lucide-react';
import { projects } from '@/app/data';
import ProjectCard from '@/components/project-card';

const ProjectsSection = () => {
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
            id="projects" 
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

            <div className="container mx-auto px-6 relative z-30">
                <RevealOnScroll>
                    <div className="flex items-center justify-center gap-3 mb-16">
                        <Globe className="text-teal-400" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured Projects</h2>
                    </div>
                </RevealOnScroll>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <RevealOnScroll key={project.title} delay={idx * 200}>
                            <ProjectCard project={project} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
      </section>
    );
};

export default ProjectsSection;