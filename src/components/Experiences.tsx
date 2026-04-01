import Title from "./Title";
import { GraduationCap, Calendar, Network, Code } from "lucide-react";
import { skillsReseau, skillsDev, experiences } from "../data/experiences";

const Experiences = () => {
  return (
    <div id="Experiences" className="py-16 px-4 max-w-7xl mx-auto">
      <Title title="Expériences & Compétences" />

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        <div className="lg:w-1/3">
          <div className="sticky top-24 bg-base-200 p-8 rounded-2xl shadow-lg border border-base-300">
            <h3 className="text-2xl font-bold mb-8 text-center text-accent">
              Compétences
            </h3>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-6 opacity-80 border-b border-base-300 pb-2">
                <Network className="w-5 h-5 text-accent" />
                Infrastructure & Réseau
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {skillsReseau.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <div className="w-16 h-16 p-3 rounded-2xl bg-base-100 shadow-md border border-base-300 transition-all duration-300 group-hover:border-accent group-hover:scale-110 group-hover:shadow-accent/20 flex items-center justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="object-contain w-full h-full filter group-hover:brightness-110"
                      />
                    </div>
                    <span className="mt-2 text-xs font-semibold text-center opacity-80 group-hover:opacity-100 group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-6 opacity-80 border-b border-base-300 pb-2">
                <Code className="w-5 h-5 text-accent" />
                Développement
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {skillsDev.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <div className="w-16 h-16 p-3 rounded-2xl bg-base-100 shadow-md border border-base-300 transition-all duration-300 group-hover:border-accent group-hover:scale-110 group-hover:shadow-accent/20 flex items-center justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="object-contain w-full h-full filter group-hover:brightness-110"
                      />
                    </div>
                    <span className="mt-2 text-xs font-semibold text-center opacity-80 group-hover:opacity-100 group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="relative border-l-4 border-accent/30 ml-4 md:ml-8 space-y-10">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative pl-8 md:pl-12 group">
                <span className="absolute -left-[14px] top-1 flex items-center justify-center w-6 h-6 bg-accent rounded-full ring-4 ring-base-100 group-hover:scale-125 transition-transform duration-300"></span>

                <div className="bg-base-200 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/30 flex flex-col sm:flex-row gap-6">
                  {experience.image ? (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-sm flex items-center justify-center border border-base-300">
                        <img
                          src={experience.image}
                          alt={experience.company}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                        <GraduationCap className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-base-content group-hover:text-accent transition-colors">
                        {experience.role}
                      </h3>
                      <span className="flex items-center gap-2 text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold opacity-90 mb-4">
                      {experience.company}
                    </h4>

                    <ul className="space-y-2 text-base opacity-80">
                      {experience.description.map((desc, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
