const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      required: true,
      trim: true,
    },
    links: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // For createdAt and updatedAt
  }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
