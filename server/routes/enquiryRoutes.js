const express = require("express");
const Enquiry = require("../models/Enquiry");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public — create enquiry
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected — get enquiries
router.get("/", protect, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch enquiries" });
  }
});

// Protected — update enquiry
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.json(updatedEnquiry);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

// Protected — delete enquiry
router.delete("/:id", protect, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
