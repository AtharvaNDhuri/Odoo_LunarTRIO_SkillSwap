const express = require("express");
const router = express.Router();
const { createSwap, getSwapsForUser, updateSwapStatus, deleteSwap } = require("../controllers/swapController");

// Create a new swap request
router.post("/", createSwap);

// Get all swaps for a user (sent and received)
router.get("/:userId", getSwapsForUser);

// Accept/Reject a swap
router.put("/:id", updateSwapStatus);

// Delete a pending request
router.delete("/:id", deleteSwap);

module.exports = router;
