'use client';
import { useState, useEffect } from 'react';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Sparkles, ChevronDown } from 'lucide-react';
import { personalData } from '@/app/data';

const HeroSection = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Membangun Solusi Digital.";

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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6 text-center relative z-10">
                
                <RevealOnScroll>
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 text-teal-400 text-sm font-medium hover:bg-slate-800/60 transition-all cursor-default">
                        <Sparkles size={14} className="animate-pulse" /> 
                        <span>Open to Opportunities</span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block text-slate-300">Halo, saya</span>
                        <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {personalData.name}
                        </span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                    <h2 className="text-xl md:text-3xl text-slate-400 mb-8 font-light h-8">
                        {typedText}<span className="animate-blink">|</span>
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={600}>
                    <p className="max-w-2xl mx-auto text-slate-400 mb-10 leading-relaxed text-lg">
                        {personalData.role} di <span className="text-slate-200 font-semibold underline decoration-teal-500/30 underline-offset-4 hover:decoration-teal-500 transition-all">{personalData.institution}</span>.
                        <br className="hidden md:block" /> {personalData.description}
                    </p>
                </RevealOnScroll>
                
                <RevealOnScroll delay={800}>
                    <div className="flex flex-wrap justify-center gap-4">
                    <a href="#contact" className="px-8 py-4 bg-teal-500 text-slate-900 font-bold rounded-full hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all transform hover:-translate-y-1">
                        Hubungi Saya
                    </a>
                    <a href="#projects" className="px-8 py-4 bg-slate-800/50 text-white font-medium rounded-full border border-slate-700 hover:bg-slate-800 hover:border-teal-500/50 transition-all backdrop-blur-sm">
                        Lihat Karya
                    </a>
                    </div>
                </RevealOnScroll>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 opacity-50">
                    <ChevronDown size={30} />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
