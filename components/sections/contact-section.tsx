'use client';
import RevealOnScroll from '@/components/reveal-on-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '@/app/data';

const ContactSection = () => {
  return (
    // PERBAIKAN: 
    // 1. bg-slate-950: Warna background disamakan dengan section sebelumnya (hitam pekat)
    // 2. -mt-1: Menarik section ke atas 1px untuk menutup celah garis putih
    // 3. z-20: Mengatur tumpukan layer
    <section id="contact" className="relative py-32 -mt-1 z-20 bg-slate-950 overflow-hidden">
        
        {/* Dekorasi: Efek cahaya (Glow) di belakang footer agar tidak terlalu sepi */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-30 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Mari Berkolaborasi</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
              Punya ide menarik atau ingin berdiskusi tentang proyek? Saya selalu terbuka untuk peluang baru.
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
          

        </div>
    </section>
  );
};

export default ContactSection;