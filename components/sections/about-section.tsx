'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { User, Mail, Briefcase, Calendar, Building2 } from 'lucide-react';
import { aboutStats, personalData, experiences } from '@/app/data';

const AboutSection = () => {
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
            id="about" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative py-24 -mt-32 z-20 overflow-visible group"
        >
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]"></div>
                
                <div 
                    className="absolute -inset-px transition duration-500"
                    style={{
                        opacity,
                        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.06), transparent 50%)`
                    }}
                />
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <RevealOnScroll>
                    <div className="max-w-7xl mx-auto">
                        
                        <div className="text-center mb-20 pt-24">
                            <p className="text-sm tracking-widest text-teal-400/60 uppercase">
                                INTRODUCTION
                            </p>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
                                Overview.
                            </h2>
                        </div>


                        

                        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">

                            <div className="md:col-span-5 relative group/image">
                                <div className="absolute -inset-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl opacity-10 group-hover/image:opacity-30 blur-2xl transition duration-700"></div>
                                
                                <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-0 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
                                    <Image 
                                        src="/indie-developer.png" 
                                        alt="Profile"
                                        fill

                                        className="object-cover object-top transition-transform duration-700 group-hover/image:scale-105"
                                        priority
                                    />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-3 rounded-xl flex items-center gap-3 shadow-lg">
                                            <div className="relative flex h-3 w-3">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                                            </div>
                                            <div className="text-xs font-medium text-slate-300">
                                                <span className="block text-teal-400 font-bold">Open to Work</span>
                                                Available for projects
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-7 flex flex-col justify-center h-full text-left">
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Hi, I'm <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
                                        {personalData.name.split(' ')[0]} {personalData.name.split(' ')[1]}
                                    </span>
                                    <span className="text-teal-400">.</span>
                                </h3>
                                
                                <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
                                    <p>
                                        I'm a beginner web developer with experience in HTML, CSS, JavaScript, Typecript, and GoLang and expertise in frameworks like React, and Node.js. I'm a quick learner and collaborate closely with job to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                                    </p>
                                    <p>
                                        Fokus utama saya saat ini adalah membangun solusi <span className="text-teal-400 font-medium">Full-stack</span> yang skalabel dan performan tinggi.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="#contact" className="px-8 py-4 rounded-full bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                        Hubungi Saya <Mail size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-24 p-8 -mx-8">
                            {aboutStats.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full"
                                >
                                    <div className="h-full bg-slate-950 rounded-2xl p-8 flex flex-col items-center text-center relative z-10 overflow-hidden justify-center">
                                        
                                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className={`p-5 rounded-full mb-6 bg-slate-900 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500 ${item.color.replace('text-', 'bg-').replace('-400', '-500/10')}`}>
                                            <item.icon className={`w-10 h-10 ${item.color}`} />
                                        </div>
                                        
                                        <h3 className="font-bold text-white text-2xl mb-2 relative z-10">{item.title}</h3>
                                        {item.desc && item.desc.trim() !== "" && (
                                            <p className="text-slate-400 group-hover:text-slate-300 text-sm relative z-10">{item.desc}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-12">
                            <div className="text-center mb-16">
                                <p className="text-sm tracking-widest text-teal-400/60 uppercase">WHAT I HAVE DONE SO FAR</p>

                            <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Experience & Achievements.</h3>
                        </div>

                            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                                
                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8 md:pl-12 group/timeline">
                                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-teal-500 border border-slate-950 ring-4 ring-slate-950 shadow-[0_0_10px_rgba(20,184,166,0.6)] group-hover/timeline:scale-125 transition-transform duration-300"></span>
                                        
                                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between">

                                            <div className="flex-grow">
                                                <h4 className="text-xl font-bold text-slate-100 group-hover/timeline:text-teal-400 transition-colors mb-1">
                                                    {exp.title}
                                                </h4>
                                                
                                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                                    <span className="flex items-center gap-1.5">
                                                        <Building2 size={14} className="text-teal-500/70" />
                                                        {exp.company}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                                    <span className="flex items-center gap-1.5 text-slate-500">
                                                        <Calendar size={14} />
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                <p className="text-slate-400 leading-relaxed text-sm max-w-2xl group-hover/timeline:text-slate-300 transition-colors">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default AboutSection;