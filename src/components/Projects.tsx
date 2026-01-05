import Title from "./Title";
// import img1 from '../assets/projects/1.png';
// import img2 from '../assets/projects/2.png';
// import img3 from '../assets/projects/3.png';
import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Projet Portfolio",
    description:
      "Projet de début d'année au centre de formation qui nous sera utile pour l'examen de fin de deuxième année mais aussi pour de future embauche.",
    technologies: ["React", "Typescript", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    // image: img1,
  },
  {
    id: 2,
    title: "Projet Send It",
    description:
      'Projet que nous effectuons pendant la formation, qui est une "copie" de Wetransfert mais que l\'on met en place sur le centre de formation.',
    technologies: ["Serveur", "Réseau", "Lycée"],
    demoLink: "#",
    repoLink: "#",
    // image: img2,
  },
  // {
  //     id: 3,
  //     title: 'Site web Inazuma Eleven GO Galaxy FR',
  //     description: 'Un projet qui à pour but de traduire le jeu en Français à 100%, ceci est le site web de présentation du mod.',
  //     technologies: ['Jeu', 'Traduction', 'Modding'],
  //     demoLink: 'https://iegogalaxy.fr',
  //     repoLink: 'https://github.com/Stellar-Project/iegogalaxy.fr',
  //     // image: img3,
  // },
];

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
              <p className="text-sm opacity-90 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-accent badge-outline text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  className="btn btn-accent flex-1 text-white"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien
                  <Link className="w-4 h-4 ml-1" />
                </a>

                <a
                  className="btn btn-neutral w-14"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;