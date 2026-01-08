const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("../models/Admin");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("Kapuu3139", 10);

    const admin = await Admin.create({
      email: "KapilNakum3139",
      password: hashedPassword
    });

    console.log("Admin created successfully:", admin.email);
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
}

createAdmin();
