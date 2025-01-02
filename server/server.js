const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { Sequelize, Op } = require('sequelize');
const sequelize = require("./config/database");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// Database connection and sync
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.get("/api", (req, res) => {
  try {
    res.json({ users: ["user1", "user2", "user3"] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Registration endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { firstname, lastname, sex, phone, username, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if user exists - fixed Op operator usage
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email: email },
          { username: username }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      firstname,
      lastname,
      sex,
      phone,
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "Registration successful" });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({
      where: { username }
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Return success with user data (excluding password)
    const userData = { ...user.toJSON() };
    delete userData.password;
    
    res.json({
      message: "Login successful",
      user: userData
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(1337, () => console.log("Server is running on port 1337"));
