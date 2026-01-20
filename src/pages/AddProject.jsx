
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const emptyForm = {
  title: "",
  description: "",
  tech: "",
  image: "",
  github: "",
  live: "",
};

const AddProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editProject = location.state;

  const [projects, setProjects] = useLocalStorage("projects", []);
  const [form, setForm] = useState(emptyForm);

  // 🔥 Populate form when editing
  useEffect(() => {
    if (editProject) {
      setForm(editProject);
    }
  }, [editProject]);

  // 🔥 Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editProject) {
      // UPDATE
      const updated = projects.map((p) =>
        p.id === editProject.id ? { ...form, id: p.id } : p
      );
      setProjects(updated);
    } else {
      // ADD
      setProjects([
        ...projects,
        {
          ...form,
          id: crypto.randomUUID(),
          createdAt: new Date(),
        },
      ]);
    }

    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">
        {editProject ? "Edit Project" : "Add Project"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="border p-2 w-full"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Tech Stack"
          value={form.tech}
          onChange={(e) =>
            setForm({ ...form, tech: e.target.value })
          }
        />

        {/* 🖼 IMAGE UPLOAD */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {/* 🖼 IMAGE PREVIEW */}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="h-40 rounded object-cover border"
          />
        )}

        <input
          className="border p-2 w-full"
          placeholder="GitHub URL"
          value={form.github}
          onChange={(e) =>
            setForm({ ...form, github: e.target.value })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Live URL"
          value={form.live}
          onChange={(e) =>
            setForm({ ...form, live: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editProject ? "Update Project" : "Add Project"}
        </button>

      </form>
    </div>
  );
};

export default AddProject;
