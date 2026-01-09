import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get("https://portfolio-project-server-txys.onrender.com", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEnquiries(res.data);
    } catch {
      alert("Unauthorized");
      navigate("/admin-login");
    }
  };

  const deleteEnquiry = async (id) => {
    await axios.delete(`https://portfolio-project-server-txys.onrender.com/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchEnquiries();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Message</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(enquiries) &&
            enquiries.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.message}</td>
                <td>
                  <button onClick={() => deleteEnquiry(e._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
