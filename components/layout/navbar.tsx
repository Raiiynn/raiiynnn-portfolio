"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '@/app/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <a href="#" className="hover:opacity-80 transition-opacity relative flex items-center">
            <div className="relative w-12 h-12 md:w-12 md:h-12">
                <Image 
                    src="/D-Logo.png" 
                    alt="Logo Brand" 
                    fill
                    className="object-contain" 
                    priority
                />
            </div>
        </a>
        {/* ------------------- */}

        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-5 duration-300">
            {navigationLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-teal-400 font-medium py-2 border-b border-slate-800/50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
      )}
    </nav>
  );
};

export default Navbar;