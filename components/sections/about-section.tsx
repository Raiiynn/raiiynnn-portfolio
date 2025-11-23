'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { User, Code, ArrowRight, Sparkles } from 'lucide-react';
import { aboutStats, personalData } from '@/app/data';

const AboutSection = () => {
    // 1. Setup Ref & State untuk efek Spotlight
    const sectionRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!sectionRef.current) return;
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <section 
            id="about" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative py-24 -mt-1 z-20 bg-slate-950 overflow-hidden group"
        >
            {/* --- BACKGROUND SPOTLIGHT EFFECT --- */}
            <div 
                className="pointer-events-none absolute -inset-px transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.06), transparent 50%)`
                }}
            />
            
            {/* Grid Pattern Halus di Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>


            <div className="container mx-auto px-6 relative z-30">
                <RevealOnScroll>
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Title Section */}
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <div className="p-2 bg-teal-500/10 rounded-lg">
                                <User className="text-teal-400" size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Introduction</h2>
                        </div>
                        
                        {/* --- PROFILE LAYOUT (Split View) --- */}
                        <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
                            
                            {/* BAGIAN KIRI: FOTO PROFIL (4 Kolom) */}
                            <div className="md:col-span-5 lg:col-span-4 relative group/image">
                                {/* Frame/Border Efek */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl opacity-20 group-hover/image:opacity-50 blur-md transition duration-500"></div>
                                
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                                    {/* GANTI SRC INI DENGAN FOTO PROFIL ANDA SENDIRI */}
                                    <Image 
                                        src="/indie-developer.svg" // Pastikan file ini ada di folder public
                                        alt="Profile Picture"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                                    />
                                    
                                    {/* Overlay Text di Foto (Opsional) */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950 to-transparent">
                                        <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold opacity-0 group-hover/image:opacity-100 transition-opacity transform translate-y-2 group-hover/image:translate-y-0">
                                            <Sparkles size={12} /> OPEN TO WORK
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN KANAN: DESKRIPSI (8 Kolom) */}
                            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center h-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{personalData.name.split(' ')[0]}</span>.
                                </h3>
                                <p className="text-lg text-teal-200/80 font-medium mb-6 flex items-center gap-2">
                                    <Code size={18} /> {personalData.role}
                                </p>
                                
                                <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
                                    <p>
                                        Saya adalah seorang mahasiswa Informatika di <span className="text-slate-100 font-semibold hover:text-teal-400 transition-colors cursor-default">{personalData.institution}</span>. 
                                        Ketertarikan saya terletak pada dunia <span className="text-teal-400">Full-stack Development</span> dan eksplorasi teknologi web modern.
                                    </p>
                                    <p>
                                        Saya percaya bahwa kode yang baik bukan hanya soal fungsi, tetapi juga tentang menciptakan <span className="text-slate-100 border-b border-teal-500/30">pengalaman pengguna yang intuitif</span> dan performa yang efisien.
                                    </p>
                                </div>

                                {/* Tombol & Links */}
                                <div className="flex flex-wrap gap-4">
                                    <a 
                                        href="#contact" 
                                        className="px-6 py-3 rounded-full bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                    >
                                        Hubungi Saya <ArrowRight size={18} />
                                    </a>
                                    <a 
                                        href="#skills" 
                                        className="px-6 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 hover:border-teal-500/50 transition-all"
                                    >
                                        Lihat Skill
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* --- STATS GRID (Yang sudah ada sebelumnya) --- */}
                        <div className="grid md:grid-cols-3 gap-6 border-t border-slate-800/50 pt-12">
                            {aboutStats.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-teal-500/30 hover:bg-slate-800/50 transition-all duration-300 group/stat text-center"
                                >
                                    <div className="inline-flex p-3 bg-slate-800/50 rounded-xl mb-4 group-hover/stat:scale-110 group-hover/stat:bg-teal-500/10 transition-all">
                                        <item.icon className={`w-6 h-6 ${item.color} group-hover/stat:text-teal-300`} />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-400 group-hover/stat:text-slate-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default AboutSection;