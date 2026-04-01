import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page introuvable
      </h2>
      <p className="text-lg opacity-70 mb-8 max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-accent text-white">
        <Home className="w-5 h-5 mr-2" />
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
