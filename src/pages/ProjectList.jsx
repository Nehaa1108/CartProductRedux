import { useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useLocalStorage("projects", []);
  const navigate = useNavigate();

   const [globalSearch, setGlobalSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [techSearch, setTechSearch] = useState("");
  
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

 


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



  //  const paginatedData = useMemo(() => {
  //   const start = (currentPage - 1) * rowsPerPage;
  //   return projects.slice(start, start + rowsPerPage);
  // }, [projects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredProjects.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleDelete = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
  };

  return (
    <div className="p-6 min-h-screen max-w-7xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold"></h1>
        <button
          type="button"
          onClick={() => navigate("/add-project")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
         <input
          placeholder="Global Search..."
          className="border p-2 rounded"
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
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

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Title -
               <input
          placeholder="Search by Title"
          className="border p-2 rounded w-30"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        />
            </th>

            <th className="p-3 border">Tech -
               <input
          placeholder="Search by Tech"
          className="border p-2 rounded w-30"
          value={techSearch}
          onChange={(e) => setTechSearch(e.target.value)}
        />
            </th>
            <th className="p-3 border">Created</th>
            <th className="p-3 border">Actions</th>

          </tr>
        </thead>

        <tbody>
          {paginatedData.map((p) => (
            <tr key={p.id}>
              <td className="p-3 border">{p.title}</td>
              <td className="p-3 border">{p.tech}</td>
              <td className="p-3 border">
                     {new Date(p.createdAt).toLocaleDateString()}                  </td>
              <td className="p-3 border space-x-3">
              
                <button
                  type="button"
                  onClick={() => navigate("/add-project", { state: p })}
                  className="text-blue-600"
                >
                  Edit
                </button>

                
                <button
                  type="button"
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {projects.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No projects found
              </td>
            </tr>
          )}
        </tbody>
      </table>
       <div className="flex justify-between items-center mt-6">
           Page {currentPage} of {totalPages || 1}
         <span className="text-sm">
         </span>

         <div className="space-x-2">
           <button
             disabled={currentPage === 1}
             onClick={() => setCurrentPage((p) => p - 1)}
             className="px-3 py-1 border rounded disabled:opacity-50"
           >
             Prev
           </button>

           <button             disabled={currentPage === totalPages}
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
