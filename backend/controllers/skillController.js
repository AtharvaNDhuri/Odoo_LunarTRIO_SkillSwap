const { Skill, User } = require("../models");

// Add a new skill
exports.addSkill = async (req, res) => {
  try {
    const { name } = req.body;
    const skill = await Skill.create({ name });
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: "Skill creation failed", details: err.message });
  }
};

// List all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: "Error fetching skills", details: err.message });
  }
};

// Assign skills offered to user
exports.setSkillsOffered = async (req, res) => {
  try {
    const { userId, skillIds } = req.body; // skillIds: [1,2,3]
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.setSkillsOffered(skillIds);
    res.json({ message: "Skills offered updated" });
  } catch (err) {
    res.status(400).json({ error: "Failed to set offered skills", details: err.message });
  }
};

// Assign skills wanted to user
exports.setSkillsWanted = async (req, res) => {
  try {
    const { userId, skillIds } = req.body; // skillIds: [1,2,3]
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.setSkillsWanted(skillIds);
    res.json({ message: "Skills wanted updated" });
  } catch (err) {
    res.status(400).json({ error: "Failed to set wanted skills", details: err.message });
  }
};
