import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-600">
              I build clean, modern UIs using React and Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-xl shadow-md"
          >
            <ul className="space-y-3">
              <li>✅ React.js</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Redux Toolkit</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
