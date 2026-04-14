import Title from "./Title";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { skillsData } from "../data/competences";
import Competence from "./Competence";

const Competences = () => {
  return (
    <div
      className="py-8 md:py-12 px-4 md:px-8 lg:px-12 w-full"
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

      <Title title="Matrice des Compétences" />

      <div className="mt-8 md:mt-12 bg-base-200 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-sm border border-base-300">
        <div className="mb-6 md:mb-8 text-center md:text-left max-w-4xl">
          <p className="text-sm md:text-lg opacity-80 leading-relaxed">
            Ce tableau récapitule les compétences clés acquises durant ma
            formation BTS SIO SISR et mon alternance. Chaque compétence est
            validée par une réalisation concrète en entreprise ou en scolarité.
          </p>
        </div>

        <div className="w-full bg-base-100 rounded-xl md:rounded-2xl border border-base-300 shadow-sm overflow-hidden">
          <table className="w-full table-fixed text-left">
            <thead className="bg-base-300 text-base-content text-xs uppercase tracking-wider">
              <tr>
                {/* Ajustement des largeurs ici pour laisser respirer les boutons */}
                <th className="py-3 px-2 md:px-6 w-[25%] md:w-[20%]">
                  Domaine
                </th>
                <th className="py-3 px-2 md:px-6 w-[30%] md:w-[30%]">
                  Compétence
                </th>
                <th className="py-3 px-2 md:px-6 w-[25%] md:w-[35%]">
                  Contexte
                </th>
                <th className="py-3 px-2 md:px-6 w-[20%] md:w-[15%] text-center">
                  Preuve
                </th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((item) => (
                <Competence key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Competences;
