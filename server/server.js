const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
