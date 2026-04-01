import { Link } from "react-router-dom";
import { miscProjects } from "../data/miscProjects";
import { ArrowLeft, Github, Globe, Terminal, Code2 } from "lucide-react";

const MiscProjects = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors mb-10 text-sm font-semibold shadow-sm border border-base-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm w-fit mb-4 border border-accent/20">
            <Code2 className="w-4 h-4" />
            <span>Scripts & Outils</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">
            Projets <span className="text-accent">Divers</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            Une collection de scripts d'automatisation, de configurations réseau
            et de petits outils personnels développés sur mon temps libre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miscProjects.map((project) => (
            <div
              key={project.id}
              className="bg-base-200 rounded-2xl p-6 shadow-md border border-base-300 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                <Terminal className="w-6 h-6 text-accent" />
              </div>

              <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h2>

              <p className="text-sm opacity-80 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-md bg-base-300/50 border border-base-300 text-xs font-semibold opacity-90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-5 border-t border-base-300 mt-auto">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-ghost rounded-full gap-2 hover:bg-base-300"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-accent rounded-full text-white gap-2 shadow-sm hover:shadow-accent/30"
                  >
                    <Globe className="w-4 h-4" /> Voir
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiscProjects;
