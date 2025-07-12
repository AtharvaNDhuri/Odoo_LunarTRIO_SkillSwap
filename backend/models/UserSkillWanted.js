const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const UserSkillWanted = sequelize.define("UserSkillWanted", {}, { timestamps: false });

module.exports = UserSkillWanted;

