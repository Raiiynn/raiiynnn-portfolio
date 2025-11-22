import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "Daffa's Digital Domain",
  description: "Portfolio of Daffa Raihan Ramadhan, an informatics student at Universitas Islam Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
