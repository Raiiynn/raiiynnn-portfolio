'use client';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Globe } from 'lucide-react';
import { projects } from '@/app/data';
import ProjectCard from '@/components/project-card';

const ProjectsSection = () => {
    return (
        // PERBAIKAN: bg-slate-950 dan -mt-1
        <section id="projects" className="relative py-32 -mt-1 z-20 bg-slate-950">
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