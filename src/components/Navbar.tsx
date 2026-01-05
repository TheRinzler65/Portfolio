import { useState } from "react";
import { Container, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    const modal = document.getElementById("contact_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "#Home", label: "Accueil" },
    { href: "#About", label: "À propos" },
    { href: "#Experiences", label: "Expériences" },
    { href: "#Projects", label: "Projets" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-xl md:text-2xl hover:text-accent transition-colors"
            >
              <Container className="w-8 h-8 text-accent" />
              <span>
                Léo <span className="text-accent">GRUET</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="text-base font-medium hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-base-content hover:text-accent focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-base-200 absolute w-full left-0 shadow-xl border-t border-base-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;