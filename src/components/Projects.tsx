import Title from "./Title";
import { projects } from "../data/projects";
import { Eye, FolderOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-10 py-12 px-4 max-w-7xl mx-auto" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
            )}

            <div className="p-5 flex flex-col flex-grow">
              <h1 className="text-xl font-bold mb-2">{project.title}</h1>
              <p className="text-sm opacity-90 mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="btn btn-accent w-full text-white mt-auto gap-2"
              >
                <Eye className="w-4 h-4" />
                Voir le détail
              </Link>
            </div>
          </div>
        ))}

        <Link
          to="/divers"
          className="bg-base-200 border-2 border-dashed border-base-content/20 rounded-xl shadow-sm flex flex-col items-center justify-center p-10 hover:border-accent hover:bg-base-300 transition-all cursor-pointer group min-h-[300px]"
        >
          <div className="w-20 h-20 rounded-full bg-base-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
            <FolderOpen className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Projets Divers</h3>
          <p className="text-center opacity-70 mb-6">
            Scripts, configurations perso, tests...
          </p>
          <span className="btn btn-ghost group-hover:text-accent gap-2">
            Tout voir <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
