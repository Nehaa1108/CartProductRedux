import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addContact } from "../service/ContactApi";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] }); 
      setForm({ name: "", email: "", message: "" });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />

            <textarea
              className="w-full p-3 border rounded h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              disabled={mutation.isPending}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {mutation.isPending ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
