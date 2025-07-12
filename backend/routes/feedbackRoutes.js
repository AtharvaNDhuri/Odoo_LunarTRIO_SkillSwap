const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Submit feedback
router.post("/", feedbackController.giveFeedback);

// Get all feedback for a user
router.get("/:userId", feedbackController.getUserFeedback);

module.exports = router;
