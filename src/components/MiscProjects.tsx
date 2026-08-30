import { Link } from "react-router-dom";
import { miscProjects } from "../data/miscProjects";
import {
  ArrowLeft,
  Github,
  Globe,
  Terminal,
  Code2,
  Server,
  Database,
  Gamepad2,
} from "lucide-react";

const getProjectIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("proxmox") || t.includes("infra") || t.includes("serveur")) {
    return <Server className="w-6 h-6 text-accent" />;
  }
  if (t.includes("db") || t.includes("données")) {
    return <Database className="w-6 h-6 text-accent" />;
  }
  if (t.includes("jeu") || t.includes("patch") || t.includes("galaxy")) {
    return <Gamepad2 className="w-6 h-6 text-accent" />;
  }
  return <Terminal className="w-6 h-6 text-accent" />;
};

const MiscProjects = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-base-200 hover:bg-accent hover:text-white transition-all duration-300 mb-12 text-sm font-bold shadow-sm border border-base-300 w-fit group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent font-bold text-sm w-fit mb-6 border border-accent/20 shadow-sm">
            <Code2 className="w-4 h-4" />
            <span>Scripts & Outils</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6 tracking-tight">
            Projets <span className="text-accent">Divers</span>
          </h1>
          <p className="text-lg md:text-xl opacity-70 max-w-3xl leading-relaxed font-medium">
            Une collection de scripts d'automatisation, de configurations
            réseau, de participations communautaires et de petits outils
            personnels développés sur mon temps libre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miscProjects.map((project) => (
            <div
              key={project.id}
              className="bg-base-100 rounded-[2rem] p-8 shadow-lg border border-base-200 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="w-14 h-14 rounded-2xl bg-base-200 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 border border-base-300 group-hover:border-accent/30 shadow-sm">
                {getProjectIcon(project.title)}
              </div>

              <h2 className="text-2xl font-extrabold mb-4 group-hover:text-accent transition-colors duration-300 tracking-tight">
                {project.title}
              </h2>

              <p className="text-base opacity-70 mb-8 flex-grow leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 rounded-lg bg-base-200 border border-base-300 text-xs font-bold text-base-content/80 group-hover:border-accent/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-base-200 mt-auto">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline border-base-300 text-base-content rounded-full gap-2 hover:bg-base-200 hover:border-base-300"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-accent rounded-full text-white gap-2 shadow-md shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
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
