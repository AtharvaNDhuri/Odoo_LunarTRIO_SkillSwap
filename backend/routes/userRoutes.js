const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register new user
router.post("/register", userController.register);

// User login
router.post("/login", userController.login);

// Get all public users
router.get("/public", userController.getPublicUsers);

// Get user profile with skills
router.get("/:id", userController.getUserProfile);

module.exports = router;
