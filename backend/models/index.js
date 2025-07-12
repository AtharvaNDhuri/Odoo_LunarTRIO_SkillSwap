const sequelize = require("../config/db");
const User = require("./User");
const Skill = require("./Skill");
const SwapRequest = require("./SwapRequest");
const Feedback = require("./Feedback");

const UserSkillOffered = require("./UserSkillOffered");
const UserSkillWanted = require("./UserSkillWanted");

// Many-to-Many
User.belongsToMany(Skill, { through: UserSkillOffered, as: "skillsOffered" });
Skill.belongsToMany(User, { through: UserSkillOffered });

User.belongsToMany(Skill, { through: UserSkillWanted, as: "skillsWanted" });
Skill.belongsToMany(User, { through: UserSkillWanted });

// SwapRequest
SwapRequest.belongsTo(User, { as: "sender" });
SwapRequest.belongsTo(User, { as: "receiver" });
SwapRequest.belongsTo(Skill, { as: "senderSkill" });
SwapRequest.belongsTo(Skill, { as: "receiverSkill" });

// Feedback
Feedback.belongsTo(SwapRequest);
Feedback.belongsTo(User, { as: "giver" });
Feedback.belongsTo(User, { as: "receiver" });

module.exports = {
  sequelize,
  User,
  Skill,
  UserSkillOffered,
  UserSkillWanted,
  SwapRequest,
  Feedback
};
