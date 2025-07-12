const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Ban a user
router.put("/ban/:id", adminController.banUser);

// Delete/reject a skill
router.delete("/skill/:skillId", adminController.rejectSkill);

// Download all swaps (example: for reports)
router.get("/swaps", adminController.getAllSwaps);

// Send platform-wide message (placeholder)
router.post("/announce", adminController.sendAnnouncement);

module.exports = router;
