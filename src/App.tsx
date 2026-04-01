import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import MiscProjects from "./components/MiscProjects";
import VeilleTechno from "./components/VeilleTechno";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

const MainLayout = () => (
  <>
    <div className="p-5 md:px-[15%]">
      <Navbar />
      <Home />
    </div>
    <About />
    <div className="p-5 md:px-[15%]">
      <Experiences />
      <Projects />
    </div>
    <ContactForm />
    <Footer />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/divers" element={<MiscProjects />} />
        <Route path="/veille" element={<VeilleTechno />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}