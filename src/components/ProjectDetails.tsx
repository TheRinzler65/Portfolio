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
  Image as ImageIcon,
  Layers,
  BookOpen,
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Projet introuvable</h2>
        <Link to="/" className="btn btn-accent rounded-full text-white">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors mb-10 text-sm font-semibold shadow-sm border border-base-300 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl leading-relaxed">
            {project.description ||
              "Aucune description disponible pour ce projet."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-base-200 rounded-3xl p-6 shadow-sm border border-base-300 flex items-center gap-5 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold opacity-50 uppercase tracking-wider mb-1">
                  Localisation
                </h4>
                <p className="font-semibold text-base-content leading-snug">
                  {project.location}
                </p>
              </div>
            </div>

            <div className="bg-base-200 rounded-3xl p-6 shadow-sm border border-base-300 flex items-center gap-5 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                <Calendar className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold opacity-50 uppercase tracking-wider mb-1">
                  Année
                </h4>
                <p className="font-semibold text-base-content leading-snug">
                  {project.year}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-base-200 rounded-3xl p-8 shadow-sm border border-base-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-base-300 pb-4">
              <Users className="w-6 h-6 text-accent" />
              Équipes du projet
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-base-100 p-5 rounded-2xl border border-base-300">
                <h4 className="font-bold flex items-center gap-2 mb-4 text-accent">
                  <Network className="w-5 h-5" /> Réseau & Infra
                </h4>
                <ul className="space-y-2">
                  {project.team.network.map((member, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 opacity-80 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-base-100 p-5 rounded-2xl border border-base-300">
                <h4 className="font-bold flex items-center gap-2 mb-4 text-accent">
                  <Code className="w-5 h-5" /> Développement
                </h4>
                <ul className="space-y-2">
                  {project.team.dev.map((member, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 opacity-80 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 pl-2">
            <Layers className="w-6 h-6 text-accent" />
            Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 bg-base-200 p-5 rounded-2xl border border-base-300 hover:border-accent hover:shadow-md transition-all duration-300 group"
              >
                {tech.logo && (
                  <div className="w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center p-3 border border-base-300 group-hover:scale-110 transition-transform flex-shrink-0">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <span className="font-bold text-center text-sm text-base-content">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {project.documents && project.documents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 pl-2">
              <BookOpen className="w-6 h-6 text-accent" />
              Documentations & Ressources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-base-200 hover:bg-accent hover:text-white p-5 rounded-2xl border border-base-300 hover:border-accent shadow-sm flex items-center justify-between transition-all duration-300 group"
                >
                  <span className="font-semibold text-base-content group-hover:text-white">
                    {doc.title}
                  </span>
                  <FileText className="w-6 h-6 text-accent group-hover:text-white flex-shrink-0 ml-4" />
                </a>
              ))}
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 pl-2">
              <ImageIcon className="w-6 h-6 text-accent" />
              Captures d'écran & Galerie
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((img, index) => (
                <div key={index} className="flex flex-col gap-4 group">
                  <div className="overflow-hidden rounded-3xl border border-base-300 shadow-sm bg-base-200 relative">
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                    />
                  </div>
                  {img.title && (
                    <p className="text-center font-semibold text-sm opacity-80 bg-base-200 py-3 px-4 rounded-xl border border-base-300 mx-4 -mt-8 relative z-20 shadow-sm">
                      {img.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
