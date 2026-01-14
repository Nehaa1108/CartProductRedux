import { useState } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [projects, setProjects] = UseLocalStorage("projects", []);
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    github: "",
    live: "",
  });

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    setProjects([
      ...projects,
      { ...form, id: uuid(), createdAt: new Date() }
    ]);

    setForm({
      title: "",
      description: "",
      tech: "",
      image: "",
      github: "",
      live: "",
    });

    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Project Title"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Tech Stack"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
        />

        <input
          placeholder="GitHub Link"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />

        <input
          placeholder="Live URL"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, live: e.target.value })}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
