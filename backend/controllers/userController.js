const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Skill } = require("../models");

// Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, location, availability, is_public } = req.body;
    const password_hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password_hash, location, availability, is_public });
    res.status(201).json({ message: "User registered", user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(400).json({ error: "Registration failed", details: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    res.json({ message: "Login successful", token, user: { id: user.id, name: user.name } });
  } catch (err) {
    res.status(500).json({ error: "Login error", details: err.message });
  }
};

// Get public users
exports.getPublicUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { is_public: true, is_banned: false },
      attributes: { exclude: ["password_hash"] }
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users", details: err.message });
  }
};

// Get user profile (including skills offered/wanted)
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password_hash"] },
      include: [
        { model: Skill, as: "skillsOffered" },
        { model: Skill, as: "skillsWanted" }
      ]
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error fetching profile", details: err.message });
  }
};
