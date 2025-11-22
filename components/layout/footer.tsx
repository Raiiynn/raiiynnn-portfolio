import { personalData } from "@/app/data";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 py-8">
      <div className="container text-center text-sm text-slate-600">
         <p>
            Designed & Built by <span className="text-teal-500">{personalData.name}</span> using Next.js.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
