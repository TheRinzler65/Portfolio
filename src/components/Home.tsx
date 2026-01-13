import { Mail } from "lucide-react";

const Home = () => {
  const openModal = () => {
    const modal = document.getElementById("contact_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-10 md:py-32 px-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left mb-6">
          Bonjour, <br /> je suis <span className="text-accent">Léo</span>
        </h1>

        <p className="text-lg md:text-xl text-center md:text-left mb-8 opacity-90 leading-relaxed">
          <span className="font-semibold block mb-2">
            Etudiant | Alternant BTS SIO SISR
          </span>
          Âgé de 20 ans, je poursuis actuellement un BTS SIO en alternance au
          lycée Pasteur Mont Roland à Dole (39100).
          <br className="hidden md:block" />
          Passionné par l'informatique, je suis de près les dernières nouveautés
          et évolutions du secteur.
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={openModal}
            className="btn btn-accent text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contactez-moi
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src="assets/profile.jpg"
          alt="Portrait Léo"
          className="w-72 h-72 md:w-96 md:h-96 object-cover border-8 border-accent shadow-2xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;