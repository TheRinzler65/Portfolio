import Title from "./Title";
import { projects } from "../data/projects";
import { Eye, FolderOpen, ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto" id="Projects">
      <Title title="Mes Projets" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => {
          const displayImage =
            typeof project.imageproject === "string" &&
            project.imageproject.trim() !== ""
              ? project.imageproject
              : undefined;

          return (
            <div
              key={project.id}
              className="group flex flex-col bg-base-200 rounded-[2rem] overflow-hidden border border-base-300 shadow-md hover:shadow-2xl hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden bg-base-300">
                {displayImage ? (
                  <>
                    <img
                      src={displayImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent opacity-90"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-base-content/20 group-hover:text-accent/50 transition-colors duration-500">
                    <FolderOpen className="w-20 h-20" />
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10 -mt-10 bg-base-200 rounded-t-[2rem]">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="opacity-70 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                  {project.description || "Aucune description disponible."}
                </p>

                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-accent text-white rounded-full w-full gap-2 shadow-sm hover:shadow-accent/40 transition-shadow"
                >
                  <Eye className="w-5 h-5" />
                  Voir le détail
                </Link>
              </div>
            </div>
          );
        })}

        <Link
          to="/divers"
          className="group flex flex-col items-center justify-center bg-base-200/50 rounded-[2rem] p-8 border-2 border-dashed border-base-300 hover:border-accent hover:bg-base-200 transition-all duration-500 min-h-[400px] hover:-translate-y-2"
        >
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 border border-accent/20">
            <Terminal className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
            Projets Divers
          </h3>
          <p className="text-center opacity-70 mb-8 max-w-xs text-sm leading-relaxed">
            Scripts d'automatisation, configurations réseau, environnements de
            test et petits outils personnels.
          </p>
          <span className="btn btn-outline btn-accent rounded-full gap-2 group-hover:bg-accent group-hover:text-white transition-all duration-300">
            Explorer <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;