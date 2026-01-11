import { useState } from "react";
import { Container, Menu, X, Rss, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Permet de savoir sur quelle page on est

  const toggleMenu = () => setIsOpen(!isOpen);

  const openModal = () => {
    const modal = document.getElementById("contact_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "/#Home", label: "Accueil" },
    { href: "/#About", label: "À propos" },
    { href: "/#Experiences", label: "Expériences" },
    { href: "/#Projects", label: "Projets" },
  ];

  // Fonction pour gérer le scroll doux si on est déjà sur la page d'accueil
  const handleNavClick = (href: string) => {
    if (location.pathname === "/" && href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-4 z-50 mx-4 md:mx-auto max-w-7xl bg-base-100/70 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl mt-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl md:text-2xl group"
            >
              <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Container className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Léo <span className="text-accent">GRUET</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-2 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-base-200 hover:text-accent transition-all duration-200"
              >
                {link.label}
              </a>
            ))}

            <div className="h-6 w-px bg-base-300 mx-2"></div>

            <Link
              to="/veille"
              className="btn btn-sm btn-ghost hover:bg-base-200 gap-2 font-normal"
            >
              <Rss className="w-4 h-4 text-accent" />
              Veille
            </Link>

            {/* LE fameux bouton amélioré */}
            <button
              onClick={openModal}
              className="btn btn-sm btn-accent rounded-full text-white px-5 shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300 ml-2"
            >
              <Mail className="w-4 h-4" />
              Me contacter
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full px-4">
          <div className="bg-base-200/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex flex-col gap-2 border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-base-100 active:scale-95 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="divider my-1"></div>
            <Link
              to="/veille"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl hover:bg-base-100 gap-3"
            >
              <Rss className="w-5 h-5 text-accent" />
              Veille Techno
            </Link>
            <button
              onClick={openModal}
              className="btn btn-accent w-full rounded-xl text-white shadow-lg mt-2"
            >
              Me contacter
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;