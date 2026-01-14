import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center bg-gray-100">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>

          <form className="mt-6 space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Name" />
            <input className="w-full p-3 border rounded" placeholder="Email" />
            <textarea className="w-full p-3 border rounded h-28" />

            <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
