import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgLinux from "../assets/techno/linux.png";
import imgWindows from "../assets/techno/Windows.png";

import pasteur from "../assets/pasteur_favicon.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Linux", image: imgLinux },
  { id: 6, name: "Windows", image: imgWindows },
];

const experiences = [
  {
    id: 1,
    role: "BTS SIO (en cours)",
    company: "Lycée Pasteur Mont Roland - Dole",
    period: "2024 - 2026",
    description: [
      "Redoublement en BTS SIO (Services Informatiques aux Organisations)",
      "Option A SISR (Solutions d'Infrastructure, Systèmes et Réseaux) en Alternance",
    ],
    image: pasteur,
  },
  {
    id: 2,
    role: "BTS CIEL",
    company: "Lycée Saint-Aubin Lasalle - Angers",
    period: "2023 - 2024",
    description: [
      "1ère année BTS CIEL",
      "(Cybersecurité Informatiques Réseaux et Electronique)",
    ],
    image: pasteur,
  },
  {
    id: 3,
    role: "Bac Professionnel SN",
    company: "Lycée Saint Joseph - Tahiti",
    period: "2020 - 2023",
    description: [
      "Redoublement en Bac Pro SN",
      "3 années en Bac Professionnel Système Numérique Option C",
      "Mention Bien au Bac",
    ],
  },
  {
    id: 4,
    role: "Bac Professionnel MELEC",
    company: "Lycée Chevrollier - Angers",
    period: "2019 - 2020",
    description: [
      "Seconde Bac Professionnel MELEC",
      "(Métier de l'électricité et de ses environnements connectés)",
    ],
  },
];

const Experiences = () => {
  return (
    <div id="Experiences" className="py-12 px-4 max-w-7xl mx-auto">
      <Title title="Expériences" />

      <div className="flex flex-col-reverse md:flex-row gap-8 mt-10">
        <div className="md:w-1/3 flex flex-wrap justify-center content-start gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center group">
              <div className="w-20 h-20 p-3 rounded-full border-2 border-accent bg-base-100 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:w-2/3 flex flex-col gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent"
            >
              <div className="flex items-start gap-4">
                {experience.image && (
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="object-contain h-12 w-12 rounded-lg bg-white p-1"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl text-accent font-bold leading-tight">
                    {experience.role}
                  </h3>
                  <h4 className="font-semibold text-lg">
                    {experience.company}
                  </h4>
                  <span className="text-sm opacity-70 block mt-1">
                    {experience.period}
                  </span>
                </div>
              </div>

              <ul className="list-disc list-outside ml-6 mt-4 space-y-1 text-sm md:text-base opacity-90">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;