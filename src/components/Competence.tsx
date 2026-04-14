import { CheckCircle2, ExternalLink, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { Skill } from "../data/competences";

interface Props {
  item: Skill;
}

const Competence = ({ item }: Props) => {
  return (
    <tr className="hover:bg-base-200/50 transition-colors border-b border-base-200">
      <td className="py-3 px-2 md:px-4 font-bold text-accent text-xs md:text-sm align-top break-words">
        {item.domain}
      </td>
      <td className="py-3 px-2 md:px-4 align-top break-words">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5 hidden sm:block" />
          <span className="font-semibold text-xs md:text-sm">{item.skill}</span>
        </div>
      </td>
      <td className="py-3 px-2 md:px-4 opacity-80 font-medium text-xs md:text-sm align-top break-words">
        {item.context}
      </td>
      <td className="py-3 px-2 md:px-4 text-center align-middle">
        {item.isExternal ? (
          <a
            href={item.proofLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-xs md:btn-sm btn-outline btn-accent rounded-full gap-1 whitespace-nowrap"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden lg:inline">{item.proofText}</span>
            <span className="lg:hidden">Lien</span>
          </a>
        ) : (
          <Link
            to={item.proofLink}
            className="btn btn-xs md:btn-sm btn-accent text-white rounded-full gap-1 shadow-sm whitespace-nowrap"
          >
            <LinkIcon className="w-3 h-3" />
            <span className="hidden lg:inline">{item.proofText}</span>
            <span className="lg:hidden">Voir</span>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default Competence;
