const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const { config } = require("../config/config");

async function seedAdmin() {
  // Connect to the database
  await mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Check if admin already exists
  const existingAdmin = await UserModel.findOne();

  if (!existingAdmin) {
    // Create admin credentials
    const adminCredentials = {
      name: "test",
      password: "12345",
    };

    // Hash the admin password
    const hashedPassword = await bcrypt.hash(adminCredentials.password, 10);
    adminCredentials.password = hashedPassword;

    // Create admin user
    await UserModel.create(adminCredentials);

    console.log("Admin user created successfully");
  } else {
    console.log("Admin user already exists");
  }

  // Close the database connection
  await mongoose.disconnect();
}

// Execute the admin seeder
seedAdmin()
  .then(() => {
    console.log("Admin seeding completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error seeding admin:", err);
    process.exit(1);
  });
