import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-300 mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 py-10">

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <h2 className="text-xl font-semibold text-white">
            Neha.dev
          </h2>

          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/projects" className="hover:text-white transition">Projects</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

      
        <div className="border-t border-gray-700 my-6"></div>

       
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Neha. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
