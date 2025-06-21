import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgLinux from "../assets/techno/linux.png";
import imgWindows from "../assets/techno/Windows.png";

// import img from "../assets/img/img.png";
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
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences