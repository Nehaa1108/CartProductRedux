import { useState, useMemo } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getContacts,addContact,updateContact,deleteContact } from "../service/ContactApi";
import PageWrapper from "../components/PageWrapper";
import EditContactModal from "../components/EditContactModal";
import toast from "react-hot-toast";

const ContactAdmin = () => {
  const queryClient = useQueryClient();
  const isAdmin = true; // 🔐 ADMIN ONLY

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editContact, setEditContact] = useState(null);
  const rowsPerPage = 5;

  const { data = [] } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      toast.success("Deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      toast.success("Updated successfully");
      setEditContact(null);
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const filtered = useMemo(() => {
    return data.filter((c) =>
      Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const exportCSV = () => {
    const csv =
      "Name,Email,Message\n" +
      filtered
        .map(
          (c) =>
            `${c.name},${c.email},"${c.message}"`
        )
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    a.click();
  };

  if (!isAdmin) {
    return (
      <p className="text-center text-red-600">
        Access Denied
      </p>
    );
  }

  return (
    <PageWrapper>
      <div className="p-6 min-h-screen max-w-6xl mx-auto">
        <div className="flex justify-between mb-4">
          <input
            className="border p-2 w-64"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={exportCSV}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Export CSV
          </button>
        </div>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.message}</td>
                <td className="border p-2 space-x-3">
                  <button
                    onClick={() => setEditContact(c)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      deleteMutation.mutate(c.id)
                    }
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>
          <span>
            Page {page} / {totalPages || 1}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        {editContact && (
          <EditContactModal
            contact={editContact}
            onClose={() => setEditContact(null)}
            onSave={(data) =>
              updateMutation.mutate(data)
            }
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default ContactAdmin;
