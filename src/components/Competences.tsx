import { Fragment } from "react";
import Title from "./Title";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { skillsData } from "../data/competences";
import Competence from "./Competence";

const categories = [
  "Projet et TP en cours de scolarité",
  "Réalisations en milieu professionnel en cours de première année",
  "Réalisations en milieu professionnel en cours de seconde année",
];

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

      <Title title="Tableau des compétences" />

      <div className="mt-8 md:mt-12 bg-base-200 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-sm border border-base-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center lg:text-left max-w-4xl">
            <p className="text-sm md:text-lg opacity-80 leading-relaxed">
              Ce tableau récapitule les compétences clés acquises durant ma
              formation BTS SIO SISR et mon alternance. Chaque compétence est
              validée par une réalisation concrète en entreprise ou en
              scolarité.
            </p>
          </div>

          <a
            href="/docs/tableau_de_competence.xlsx"
            download
            className="btn btn-accent text-white rounded-full px-8 py-3 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all flex items-center gap-3 flex-shrink-0"
          >
            <Download className="w-5 h-5" />
            Télécharger (.xlsx)
          </a>
        </div>

        <div className="w-full bg-base-100 rounded-xl md:rounded-2xl border border-base-300 shadow-sm overflow-hidden">
          <table className="w-full table-fixed text-left">
            <thead className="bg-base-300 text-base-content text-xs uppercase tracking-wider">
              <tr>
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
              {categories.map((category, index) => (
                <Fragment key={index}>
                  <tr>
                    <td
                      colSpan={4}
                      className="bg-base-200/80 font-bold text-center text-accent py-4 uppercase tracking-wider text-sm md:text-base shadow-sm border-y border-base-300"
                    >
                      {category}
                    </td>
                  </tr>
                  {skillsData
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <Competence key={item.id} item={item} />
                    ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Competences;
