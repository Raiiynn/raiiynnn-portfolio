'use client';
import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const currentRef = ref.current; // Simpan ke variabel lokal DULU

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );

  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef); // Gunakan variabel lokal tadi
  };
}, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
