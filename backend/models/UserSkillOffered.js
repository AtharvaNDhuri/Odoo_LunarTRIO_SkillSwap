const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const UserSkillOffered = sequelize.define("UserSkillOffered", {}, { timestamps: false });

module.exports = UserSkillOffered;
