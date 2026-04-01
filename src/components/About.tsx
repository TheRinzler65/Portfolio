import Title from "./Title";
import { Server, GraduationCap, Terminal, FileDown } from "lucide-react";

const About = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto" id="About">
      <Title title="À propos de moi" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-2 bg-base-200 rounded-3xl p-8 md:p-12 shadow-sm border border-base-300 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Construire et sécuriser les infrastructures de demain.
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Plongé dans l'informatique depuis mon plus jeune âge, j'ai choisi de
            transformer cette passion en métier. Actuellement en BTS SIO option
            SISR, je combine apprentissage théorique et expérience terrain grâce
            à mon alternance. Mon objectif ? Garantir la fiabilité, la sécurité
            et l'automatisation des réseaux d'entreprise.
          </p>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent w-fit text-white rounded-full px-6 shadow-lg hover:scale-105 transition-transform"
          >
            <FileDown className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>

        <div className="md:col-span-1 bg-base-200 rounded-3xl overflow-hidden shadow-sm border border-base-300 relative min-h-[300px]">
          <img
            src="/assets/profile.jpg"
            alt="Léo Gruet"
            className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="bg-base-200 rounded-3xl p-8 shadow-sm border border-base-300 hover:border-accent transition-colors group">
          <Server className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-3">Admin Réseau</h3>
          <p className="opacity-70 text-sm leading-relaxed">
            Gestion de l'infrastructure au quotidien, virtualisation sous
            Proxmox, configuration réseau et support utilisateur.
          </p>
        </div>

        <div className="bg-base-200 rounded-3xl p-8 shadow-sm border border-base-300 hover:border-accent transition-colors group">
          <GraduationCap className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-3">Étudiant SIO</h3>
          <p className="opacity-70 text-sm leading-relaxed">
            Formation spécialisée en Solutions d'Infrastructure, Systèmes et
            Réseaux. Focus sur la sécurité et le déploiement d'OS.
          </p>
        </div>

        <div className="bg-base-200 rounded-3xl p-8 shadow-sm border border-base-300 hover:border-accent transition-colors group">
          <Terminal className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-3">Passionné</h3>
          <p className="opacity-70 text-sm leading-relaxed">
            Veille technologique active, création de laboratoires virtuels
            (Homelab) et automatisation de processus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
