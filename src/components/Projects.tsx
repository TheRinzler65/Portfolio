import Title from "./Title"

import img3 from '../assets/projects/3.png';

import { Github, Link } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Projet Portfolio',
        description: 'Projet de début d\'année au centre de formation qui nous sera utile pour l\'examen de fin de deuxième année mais aussi pour de future embauche.',
        technologies: ['React', '', ''],
        demoLink: '#',
        repoLink: '#',
        //image: img1,
    },
    {
        id: 2,
        title: 'Projet Send It',
        description: 'Projet que nous effectuons pendant la formation, qui est une "copie" de Wetransfert mais que l\'on met en place sur le centre de formation.',
        technologies: ['Serveur', 'Réseau', 'Lycée'],
        demoLink: '#',
        repoLink: '#',
        //image: img2,
    },
    {
        id: 3,
        title: 'Site web Inazuma Eleven GO Galaxy FR',
        description: 'Un projet qui à pour but de traduire le jeu en Français à 100%, ceci est le site web de présentation du mod.',
        technologies: ['Jeu', 'Traduction', 'Modding'],
        demoLink: 'https://iegogalaxy.fr',
        repoLink: 'https://github.com/Stellar-Project/iegogalaxy.fr',
        image: img3,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Lien
                                <Link className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects