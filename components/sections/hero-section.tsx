'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Sparkles, ChevronDown } from 'lucide-react';
import { personalData } from '@/app/data';

const HeroSection = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "IT Solution Enabler.";
    
    const sectionRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!sectionRef.current) return;
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            id="home" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >

            <div className="absolute inset-0 w-full h-full z-0 bg-slate-950">
                <Image 
                    src="/Cover.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    quality={90}
                    className="object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-slate-950/40 z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 z-20 pointer-events-none"></div>
            </div>

             <div 
                className="pointer-events-none absolute -inset-px transition duration-500 z-20"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.1), transparent 50%)`
                }}
            />

            <div className="container mx-auto px-6 text-center relative z-30 pt-20">
                
                <RevealOnScroll>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 text-teal-400 text-sm font-medium backdrop-blur-md">
                        <Sparkles size={14} className="animate-pulse" /> 
                        <span>Open to Opportunities</span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                        <span className="block text-slate-100">Halo, saya</span>
                        <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {personalData.name}
                        </span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                    <h2 className="text-xl md:text-3xl text-slate-300 mb-8 font-light h-8 drop-shadow-lg">
                        {typedText}<span className="animate-blink">|</span>
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={600}>
                    <p className="max-w-2xl mx-auto text-slate-300 mb-10 leading-relaxed text-lg drop-shadow-md">
                        {personalData.role} at <span className="text-white font-semibold underline decoration-teal-500/50 underline-offset-4">{personalData.institution}</span>.
                        <br className="hidden md:block" /> {personalData.description}
                    </p>
                </RevealOnScroll>
                
                <RevealOnScroll delay={800}>
                    <div className="flex flex-wrap justify-center gap-4">
                    <a href="#contact" className="px-8 py-4 bg-teal-500 text-slate-900 font-bold rounded-full hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all transform hover:-translate-y-1">
                        Hubungi Saya
                    </a>
                    <a href="#projects" className="px-8 py-4 bg-slate-900/60 text-white font-medium rounded-full border border-slate-600 hover:bg-slate-800 hover:border-teal-500/50 transition-all backdrop-blur-md">
                        Lihat Karya
                    </a>
                    </div>
                </RevealOnScroll>

                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 opacity-70 z-30">
                    <ChevronDown size={30} />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;