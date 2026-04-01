import { Mail, ArrowRight, Terminal } from "lucide-react";

const Home = () => {
  const openModal = () => {
    const modal = document.getElementById("contact_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("Projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Home"
      className="min-h-[85vh] flex flex-col-reverse lg:flex-row justify-center items-center gap-12 py-12 px-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:w-1/2 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm w-fit mb-6 border border-accent/20">
          <Terminal className="w-4 h-4" />
          <span>Administrateur Systèmes & Réseaux</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left mb-6 tracking-tight">
          Bonjour, je suis <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
            Léo Gruet
          </span>
        </h1>

        <p className="text-lg md:text-xl text-center md:text-left mb-10 opacity-80 leading-relaxed max-w-2xl">
          Actuellement en{" "}
          <strong className="text-base-content">BTS SIO SISR</strong> en
          alternance au lycée Pasteur Mont Roland à Dole (39100). Passionné par
          l'infrastructure, l'automatisation et la résolution de problèmes
          complexes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button
            onClick={openModal}
            className="btn btn-accent text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Me contacter
          </button>
          <button
            onClick={scrollToProjects}
            className="btn btn-outline btn-accent font-bold px-8 py-3 rounded-full hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            Mes projets
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
        <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10"></div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent/50 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <img
            src="/assets/profile.jpg"
            alt="Portrait Léo"
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] object-cover rounded-[2rem] border-4 border-base-100 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] -rotate-2 group-hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
