import { Container, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
      <aside>
        <Container className="w-10 h-10 text-accent mb-2" />
        <p className="font-bold text-lg">
          Léo <span className="text-accent">GRUET</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;