import Title from "./Title";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Competences = () => {
  return (
    <div
      className="py-8 md:py-12 px-4 md:px-8 lg:px-12 w-full min-h-[70vh]"
      id="Competences"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors mb-8 text-sm font-semibold shadow-sm border border-base-300 w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Retour à l'accueil</span>
        <span className="sm:hidden">Retour</span>
      </Link>

      <Title title="Tableau des Compétences" />

      <div className="mt-8 md:mt-12 bg-base-200 rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-sm border border-base-300 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-accent mb-4">
          Tableau de synthèse des réalisations professionnelles
        </h3>
        
        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl mb-10">
          Ce document récapitule les compétences clés acquises durant ma
          formation BTS SIO SISR et mon alternance. Chaque compétence est
          validée par une réalisation concrète en entreprise ou en scolarité.
          Vous pouvez télécharger la matrice complète au format Excel ci-dessous.
        </p>

        <a
          href="/assets/tableau_de_competence.xlsx"
          download
          className="btn btn-accent text-white rounded-full px-10 py-4 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center gap-3 text-lg"
        >
          <Download className="w-6 h-6" />
          Télécharger le tableau (.xlsx)
        </a>
      </div>
    </div>
  );
};

export default Competences;