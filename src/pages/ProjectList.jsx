import { useState, useMemo } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = UseLocalStorage("projects", []);
  const navigate = useNavigate();

  // search & sort states
  const [globalSearch, setGlobalSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [techSearch, setTechSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // 🔍 FILTER + SORT
  const filteredProjects = useMemo(() => {
    let data = [...projects];

    if (globalSearch) {
      data = data.filter((p) =>
        Object.values(p)
          .join(" ")
          .toLowerCase()
          .includes(globalSearch.toLowerCase())
      );
    }

    if (titleSearch) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(titleSearch.toLowerCase())
      );
    }

    if (techSearch) {
      data = data.filter((p) =>
        p.tech.toLowerCase().includes(techSearch.toLowerCase())
      );
    }

    data.sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    return data;
  }, [projects, globalSearch, titleSearch, techSearch, sortOrder]);

  // pagination logic
  const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredProjects.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // delete
  const handleDelete = (id) => {
    if (window.confirm("Delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project List</h1>

        <button
          onClick={() => navigate("/add-project")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Project
        </button>
      </div>

      {/* SEARCH CONTROLS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          placeholder="Global Search..."
          className="border p-2 rounded"
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
        />

        <input
          placeholder="Search by Title"
          className="border p-2 rounded"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        />

        <input
          placeholder="Search by Tech"
          className="border p-2 rounded"
          value={techSearch}
          onChange={(e) => setTechSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A → Z</option>
          <option value="desc">Sort Z → A</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Tech Stack</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No projects found
                </td>
              </tr>
            ) : (
              paginatedData.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border font-medium">{p.title}</td>
                  <td className="p-3 border">{p.tech}</td>
                  <td className="p-3 border">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 border space-x-3">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm">
          Page {currentPage} of {totalPages || 1}
        </span>

        <div className="space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
