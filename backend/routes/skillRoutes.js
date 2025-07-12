const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

// Add a new skill
router.post("/", skillController.addSkill);

// List all skills
router.get("/", skillController.getAllSkills);

// Assign skills offered to a user
router.post("/offered", skillController.setSkillsOffered);

// Assign skills wanted to a user
router.post("/wanted", skillController.setSkillsWanted);

module.exports = router;
