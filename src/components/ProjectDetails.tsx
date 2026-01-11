import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Network,
  Code,
  FileText,
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="text-center mt-20">Projet introuvable</div>;
  }

  return (
    <div className="min-h-screen bg-base-100 py-10 px-5 md:px-20">
      <Link to="/" className="btn btn-ghost mb-8 gap-2">
        <ArrowLeft className="w-5 h-5" />
        Retour à l'accueil
      </Link>

      <div className="flex flex-col gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            {project.title}
          </h1>
          <p className="text-xl opacity-80">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="stats shadow bg-base-200 w-full">
            <div className="stat">
              <div className="stat-figure text-accent">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="stat-title">Localisation</div>
              <div className="stat-value text-lg">{project.location}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-accent">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="stat-title">Année</div>
              <div className="stat-value text-lg">{project.year}</div>
            </div>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Équipes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-2 text-sm uppercase tracking-wide opacity-70">
                  <Network className="w-4 h-4" /> Réseau
                </h4>
                <ul className="list-disc list-inside">
                  {project.team.network.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-2 text-sm uppercase tracking-wide opacity-70">
                  <Code className="w-4 h-4" /> Développement
                </h4>
                <ul className="list-disc list-inside">
                  {project.team.dev.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
            Architecture & Infrastructure
          </h3>
          <img
            src={project.infraImage}
            alt="Schéma infrastructure"
            className="w-full h-auto rounded-lg border border-base-300 shadow-inner bg-white"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Technologies & Documentation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-base-200 p-4 rounded-xl hover:bg-base-300 transition-colors border border-transparent hover:border-accent group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{tech.name}</span>
                  <span className="text-xs text-accent flex items-center gap-1 group-hover:underline">
                    Voir la doc <FileText className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
