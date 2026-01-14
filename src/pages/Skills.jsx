import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const skills = ["React", "Tailwind", "Redux", "JavaScript", "Git"];

const Skills = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">

          <h2 className="text-3xl font-bold">Skills</h2>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
