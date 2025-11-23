import { personalData } from "@/app/data";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 py-8">
      <div className="container text-center text-sm text-slate-600">
         <p>
            © 2025 <span className="text-teal-500">{personalData.name}</span> All rights reserved. 
          </p>
      </div>
    </footer>
  );
};

export default Footer;
