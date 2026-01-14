import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-2xl px-4">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Hi, I’m <span className="text-blue-600">Neha</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-gray-600"
          >
            Frontend Developer using React & Tailwind CSS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex justify-center gap-4"
          >
            <a 
            href="/projects"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Projects
            </a>
            <a 
             href="/contact"
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
              Contact Me
            </a>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
