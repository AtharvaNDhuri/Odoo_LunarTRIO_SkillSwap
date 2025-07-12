const { SwapRequest, User, Skill } = require("../models");

exports.createSwap = async (req, res) => {
  const { sender_id, receiver_id, sender_skill_id, receiver_skill_id, message } = req.body;

  try {
    const newSwap = await SwapRequest.create({
      senderId: sender_id,
      receiverId: receiver_id,
      senderSkillId: sender_skill_id,
      receiverSkillId: receiver_skill_id,
      message,
      status: "pending"
    });
    res.status(201).json(newSwap);
  } catch (err) {
    console.error("❌ Error creating swap:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getSwapsForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const swaps = await SwapRequest.findAll({
      where: {
        [Op.or]: [
          { senderId: userId },
          { receiverId: userId }
        ]
      },
      include: ["sender", "receiver", "senderSkill", "receiverSkill"]
    });

    res.status(200).json(swaps);
  } catch (err) {
    console.error("❌ Error fetching swaps:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateSwapStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  try {
    const swap = await SwapRequest.findByPk(id);
    if (!swap) return res.status(404).json({ error: "Swap not found" });

    swap.status = status;
    await swap.save();

    res.status(200).json(swap);
  } catch (err) {
    console.error("❌ Error updating swap:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteSwap = async (req, res) => {
  const { id } = req.params;

  try {
    const swap = await SwapRequest.findByPk(id);
    if (!swap) return res.status(404).json({ error: "Swap not found" });
    if (swap.status !== "pending") return res.status(400).json({ error: "Only pending swaps can be deleted" });

    await swap.destroy();
    res.status(200).json({ message: "Swap deleted" });
  } catch (err) {
    console.error("❌ Error deleting swap:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
