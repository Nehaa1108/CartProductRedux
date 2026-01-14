import { motion } from "framer-motion";

const ProjectCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg p-5"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        View Project
      </button>
    </motion.div>
  );
};

export default ProjectCard;
