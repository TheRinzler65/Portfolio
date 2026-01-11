import img1 from "../assets/img.jpg";

export const projects = [
  {
    id: 1,
    title: "Projet Portfolio",
    description: "Projet de début d'année...",
    location: "Dole, France",
    year: "2024",
    infraImage: img1,
    team: {
      network: ["Léo Gruet"],
      dev: ["Léo Gruet"],
    },
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        docLink: "#",
      },
      {
        name: "Tailwind",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        docLink: "#",
      },
    ],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Projet Send It",
    description: "Copie de WeTransfer en local...",
    location: "Lycée Pasteur Mont Roland",
    year: "2025",
    infraImage: img1,
    team: {
      network: ["Léo Gruet", "Collègue 1"],
      dev: ["Collègue 2"],
    },
    technologies: [
      {
        name: "Linux",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
        docLink: "#",
      },
      {
        name: "Apache",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Apache_HTTP_Server_Logo_%282016%29.svg",
        docLink: "#",
      },
    ],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
];
