const { User, Skill, SwapRequest, Feedback } = require("../models");

// Ban a user
exports.banUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    user.is_banned = true;
    await user.save();
    res.json({ message: "User banned" });
  } catch (err) {
    res.status(400).json({ error: "Failed to ban user", details: err.message });
  }
};

// Reject inappropriate skills (delete skill)
exports.rejectSkill = async (req, res) => {
  try {
    const { skillId } = req.params;
    const skill = await Skill.findByPk(skillId);
    if (!skill) return res.status(404).json({ error: "Skill not found" });
    await skill.destroy();
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete skill", details: err.message });
  }
};

// Download reports (example: get all swaps)
exports.getAllSwaps = async (req, res) => {
  try {
    const swaps = await SwapRequest.findAll();
    res.json(swaps);
  } catch (err) {
    res.status(500).json({ error: "Error fetching swaps", details: err.message });
  }
};

// Send platform-wide message (placeholder)
exports.sendAnnouncement = (req, res) => {
  // Real implementation: save message to DB, push notification, etc.
  res.json({ message: "Platform-wide message sent (demo)" });
};
