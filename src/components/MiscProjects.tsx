import { Link } from "react-router-dom";
import { miscProjects } from "../data/miscProjects";
import { ArrowLeft, Github, Globe, Terminal } from "lucide-react";

const MiscProjects = () => {
  return (
    <div className="min-h-screen bg-base-100 py-10 px-5 md:px-20">
      <Link to="/" className="btn btn-ghost mb-8 gap-2">
        <ArrowLeft className="w-5 h-5" />
        Retour à l'accueil
      </Link>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-2">Projets Divers</h1>
        <p className="opacity-70 mb-10">
          Une collection de scripts, configurations et petits outils personnels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miscProjects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-200 shadow-xl border border-base-300 hover:border-accent transition-colors"
            >
              <div className="card-body">
                <h2 className="card-title flex justify-between">
                  {project.title}
                  <Terminal className="w-5 h-5 opacity-50" />
                </h2>
                <p className="text-sm opacity-80 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="badge badge-neutral badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-auto pt-4 border-t border-base-300">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-ghost gap-2"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-accent btn-outline gap-2"
                    >
                      <Globe className="w-4 h-4" /> Voir
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiscProjects;