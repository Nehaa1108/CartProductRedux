import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "tabulator-tables/dist/css/tabulator.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import AddProject from "./pages/AddProject";
import ProjectList from "./pages/ProjectList";
import { Toaster } from "react-hot-toast";
import ContactAdmin from "./pages/ContactAdmin";
import BasicTable from "./pages/BasicTable";


function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />

     <Toaster
        position="top-right"
        toastOptions={{
          className: "dark:bg-gray-800 dark:text-white",
        }}></Toaster>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects-list" element={<ProjectList />} />
         <Route path="/contact-list" element={<ContactAdmin />} />
         <Route path="/basetable" element={<BasicTable />}
        </Routes>
         <ScrollToTop />
      </AnimatePresence>

    
     

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
