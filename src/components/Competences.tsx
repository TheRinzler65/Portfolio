import Title from "./Title";
import { ArrowLeft, Download, FileText } from "lucide-react";
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

      <div className="mt-8 md:mt-12 bg-base-200 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm border border-base-300 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-accent mb-4">
          Tableau de synthèse des réalisations professionnelles
        </h3>

        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl mb-8">
          Ce document récapitule les compétences clés acquises durant ma
          formation BTS SIO SISR et mon alternance. Chaque compétence est
          validée par une réalisation concrète en entreprise ou en scolarité.
        </p>

        <div className="w-full max-w-5xl h-[600px] md:h-[800px] mb-10 rounded-xl overflow-hidden border border-base-300 shadow-inner bg-base-100 hidden md:block">
          <iframe
            src="/docs/competences/tableau_de_competence.pdf"
            className="w-full h-full border-none"
            title="Visualisation du tableau des compétences"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a
            href="/docs/competences/tableau_de_competence.xlsx"
            download
            className="btn btn-accent text-white rounded-full px-8 py-3 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center gap-3 text-base w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            Télécharger (.xlsx)
          </a>

          <a
            href="/docs/competences/tableau_de_competence.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-accent rounded-full px-8 py-3 hover:-translate-y-1 transition-all flex items-center gap-3 text-base w-full sm:w-auto"
          >
            <FileText className="w-5 h-5" />
            Ouvrir le PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Competences;
