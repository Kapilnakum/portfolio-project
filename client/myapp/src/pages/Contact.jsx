import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    clientName: "",
    projectName: "",
    phone: "",
    description: "",
    budget: "",
    links: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.clientName.trim()) return "Client Name is required";
    if (!form.projectName.trim()) return "Project Name is required";
    if (!form.phone.trim()) return "Phone Number is required";
    if (!form.description.trim()) return "Project Description is required";
    if (!form.budget.trim()) return "Budget is required";
    if (!form.links.trim()) return "Relevant Links are required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/enquiries", form);
      toast.success("Enquiry submitted successfully!");
      setForm({
        clientName: "",
        projectName: "",
        phone: "",
        description: "",
        budget: "",
        links: "",
      });
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <input
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Project Name</label>
          <input
            name="projectName"
            value={form.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Project Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your project"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Budget</label>
          <input
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="e.g., $5000 - $10000"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Relevant Links</label>
          <input
            name="links"
            value={form.links}
            onChange={handleChange}
            placeholder="GitHub, Drive, Figma, etc."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-50 transition duration-200"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
