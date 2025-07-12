const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password_hash: DataTypes.STRING,
  location: DataTypes.STRING,
  profile_photo: DataTypes.STRING,
  availability: DataTypes.STRING,
  is_public: { type: DataTypes.BOOLEAN, defaultValue: true },
  is_banned: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = User;
