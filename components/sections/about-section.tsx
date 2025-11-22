'use client';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { User } from 'lucide-react';
import { aboutStats } from '@/app/data';

const AboutSection = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <User className="text-teal-400" size={28} />
                    <h2 className="text-3xl md:text-4xl font-bold">Tentang Saya</h2>
                </div>
                
                <div className="bg-slate-800/30 p-8 md:p-12 rounded-3xl border border-slate-700/50 hover:border-teal-500/20 transition-all backdrop-blur-sm shadow-xl group">
                    <p>&quot;Teknologi bukan hanya tentang...&quot;</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                    {aboutStats.map((item, idx) => (
                        <div key={idx} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center hover:bg-slate-800 hover:-translate-y-2 transition-all duration-300">
                        <item.icon className={`mb-4 ${item.color}`} size={32} />
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
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
