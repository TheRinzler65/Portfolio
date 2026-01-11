import { useState } from "react";
import { Link } from "react-router-dom";
import { veilleArticles, veilleBilan, veilleTools } from "../data/veille";
import {
  ArrowLeft,
  ExternalLink,
  Rss,
  Wrench,
  FileText,
  CheckCircle,
} from "lucide-react";

const VeilleTechno = () => {
  const [activeTab, setActiveTab] = useState<"articles" | "bilan" | "outils">(
    "articles"
  );

  return (
    <div className="min-h-screen bg-base-100 py-10 px-5 md:px-20">
      <Link to="/" className="btn btn-ghost mb-8 gap-2">
        <ArrowLeft className="w-5 h-5" />
        Retour à l'accueil
      </Link>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 flex justify-center items-center gap-3">
            <Rss className="w-10 h-10" />
            Veille Technologique
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Sujet : <strong>Automatisation et Déploiement d'OS (OSD)</strong>
          </p>
        </div>

        <div className="tabs tabs-boxed justify-center bg-base-200 p-2 mb-10 rounded-xl">
          <a
            className={`tab tab-lg ${
              activeTab === "articles" ? "tab-active bg-accent text-white" : ""
            }`}
            onClick={() => setActiveTab("articles")}
          >
            <FileText className="w-4 h-4 mr-2" /> Articles Mensuels
          </a>
          <a
            className={`tab tab-lg ${
              activeTab === "bilan" ? "tab-active bg-accent text-white" : ""
            }`}
            onClick={() => setActiveTab("bilan")}
          >
            <CheckCircle className="w-4 h-4 mr-2" /> Bilan & Synthèse
          </a>
          <a
            className={`tab tab-lg ${
              activeTab === "outils" ? "tab-active bg-accent text-white" : ""
            }`}
            onClick={() => setActiveTab("outils")}
          >
            <Wrench className="w-4 h-4 mr-2" /> Outils de Veille
          </a>
        </div>

        <div className="animate-fade-in">
          {activeTab === "articles" && (
            <div className="space-y-6">
              {veilleArticles.map((article) => (
                <div
                  key={article.id}
                  className="collapse collapse-arrow bg-base-200 border border-base-300 shadow-md"
                >
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-6">
                    <span className="badge badge-accent badge-lg text-white whitespace-nowrap">
                      {article.month}
                    </span>
                    <span className="flex-1">{article.title}</span>
                  </div>
                  <div className="collapse-content px-6 pb-6">
                    <div className="divider my-0"></div>
                    <p className="font-semibold opacity-70 mb-4 mt-4 italic">
                      "{article.summary}"
                    </p>

                    <div
                      className="prose max-w-none mb-6"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="badge badge-neutral">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-base-300">
                      <h4 className="text-sm font-bold uppercase mb-2 opacity-60">
                        Sources :
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {article.sources.map((source, idx) => (
                          <a
                            key={idx}
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="link link-accent text-sm flex items-center gap-1"
                          >
                            {source.name} <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "bilan" && (
            <div className="bg-base-200 p-8 rounded-xl shadow-lg border-l-8 border-accent">
              <h2 className="text-3xl font-bold mb-6">
                Synthèse de la période
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                {veilleBilan.intro}
              </p>
              <ul className="space-y-4 mb-8">
                {veilleBilan.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-base-100 p-6 rounded-lg border border-base-300">
                <h3 className="font-bold text-accent uppercase tracking-widest mb-2">
                  Conclusion
                </h3>
                <p className="italic text-lg">"{veilleBilan.conclusion}"</p>
              </div>
            </div>
          )}

          {activeTab === "outils" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {veilleTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="card bg-base-200 shadow-xl flex-row items-center p-6 gap-6 hover:scale-[1.02] transition-transform"
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="card-title text-2xl mb-1">{tool.name}</h2>
                    <p className="opacity-80 text-sm">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VeilleTechno;