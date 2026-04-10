import { Github, Linkedin, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-20 border-t border-base-300">
      <aside className="flex flex-col items-center">
        <div className="bg-accent/10 p-4 rounded-full mb-4">
          <Terminal className="w-8 h-8 text-accent" />
        </div>
        <p className="font-bold text-2xl tracking-wide">
          Léo <span className="text-accent">GRUET</span>
        </p>
        <p className="text-sm opacity-80 font-medium mt-1">
          Administrateur Systèmes & Réseaux
        </p>
        <p className="text-xs opacity-60 mt-4">
          Copyright © {new Date().getFullYear()} - Tous droits réservés
        </p>
      </aside>
      <nav>
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/TheRinzler65"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-base-100 rounded-full hover:text-white hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-sm border border-base-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/leogruet/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-base-100 rounded-full hover:text-white hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-sm border border-base-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
