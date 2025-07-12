const { Feedback } = require("../models");

// Submit feedback
exports.giveFeedback = async (req, res) => {
  try {
    const { swap_id, giver_id, receiver_id, rating, comments } = req.body;
    const feedback = await Feedback.create({ swap_id, giver_id, receiver_id, rating, comments });
    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (err) {
    res.status(400).json({ error: "Feedback failed", details: err.message });
  }
};

// Get all feedback for a user
exports.getUserFeedback = async (req, res) => {
  try {
    const { userId } = req.params;
    const feedbacks = await Feedback.findAll({ where: { receiver_id: userId } });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching feedback", details: err.message });
  }
};
