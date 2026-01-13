import Title from "./Title";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Administrateur réseau en alternance",
    description: "Description 1",
    icon: <LetterText className="text-accent w-8 h-8" />,
  },
  {
    id: 2,
    title: "Etudiant en BTS SIO",
    description: "Description 2",
    icon: <CalendarSync className="text-accent w-8 h-8" />,
  },
  {
    id: 3,
    title: "Créateur de contenu",
    description: "Description 3",
    icon: <Paintbrush className="text-accent w-8 h-8" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 py-12 px-4 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <div className="hidden md:block">
          <img
            src="assets/profile.jpg"
            alt="A propos de moi"
            className="w-80 h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-6 rounded-xl w-full md:w-96 shadow-xl transition-transform hover:scale-105"
            >
              <div className="mb-4 md:mb-0 text-accent">{section.icon}</div>
              <div className="md:ml-6 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm opacity-80">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;