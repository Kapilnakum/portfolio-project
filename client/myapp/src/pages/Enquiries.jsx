import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();

  const fetchEnquiries = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin-login");
        return;
      }

      const res = await axios.get("https://portfolio-project-server-txys.onrender.com", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEnquiries(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Failed to fetch enquiries", error);
      navigate("/admin-login");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleRowClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setEditForm({ ...selectedEnquiry });
    setIsEditMode(true);
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(
        `https://portfolio-project-server-txys.onrender.com${selectedEnquiry._id}`,
        editForm,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Enquiry updated successfully");
      setIsEditMode(false);
      setSelectedEnquiry(editForm);
      fetchEnquiries(); // Refresh the list
    } catch (error) {
      toast.error("Failed to update enquiry");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`https://portfolio-project-server-txys.onrender.com/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Enquiry deleted");
      setEnquiries(enquiries.filter((e) => e._id !== id));
      if (selectedEnquiry && selectedEnquiry._id === id) {
        setIsModalOpen(false);
      }
    } catch (error) {
      toast.error("Failed to delete enquiry");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEnquiry(null);
    setIsEditMode(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading enquiries...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Enquiry Management Dashboard</h2>

        {enquiries.length === 0 ? (
          <p className="text-center text-gray-500">No enquiries found.</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enquiries.map((e) => (
                  <tr
                    key={e._id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(e)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {e.clientName}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {e.projectName}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {e.phone}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {e.budget}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          handleDelete(e._id);
                        }}
                        className="text-red-600 hover:text-red-900 mr-4"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedEnquiry && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {isEditMode ? "Edit Enquiry" : "Enquiry Details"}
              </h3>

              {isEditMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Client Name</label>
                    <input
                      type="text"
                      value={editForm.clientName || ""}
                      onChange={(e) => setEditForm({ ...editForm, clientName: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                      type="text"
                      value={editForm.projectName || ""}
                      onChange={(e) => setEditForm({ ...editForm, projectName: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      value={editForm.phone || ""}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={editForm.description || ""}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      rows="4"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <input
                      type="text"
                      value={editForm.budget || ""}
                      onChange={(e) => setEditForm({ ...editForm, budget: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Links</label>
                    <input
                      type="text"
                      value={editForm.links || ""}
                      onChange={(e) => setEditForm({ ...editForm, links: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p><strong>Client Name:</strong> {selectedEnquiry.clientName}</p>
                  <p><strong>Project Name:</strong> {selectedEnquiry.projectName}</p>
                  <p><strong>Phone:</strong> {selectedEnquiry.phone}</p>
                  <p><strong>Description:</strong> {selectedEnquiry.description}</p>
                  <p><strong>Budget:</strong> {selectedEnquiry.budget}</p>
                  <p><strong>Links:</strong> <a href={selectedEnquiry.links} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedEnquiry.links}</a></p>
                  <p><strong>Submitted:</strong> {new Date(selectedEnquiry.createdAt).toLocaleString()}</p>
                </div>
              )}

              <div className="flex justify-end mt-6 space-x-3">
                {isEditMode ? (
                  <>
                    <button
                      onClick={handleSaveEdit}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditMode(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleEdit}
                      className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(selectedEnquiry._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Enquiries;
