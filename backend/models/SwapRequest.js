const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SwapRequest = sequelize.define("SwapRequest", {
  message: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM("pending", "accepted", "rejected", "cancelled"),
    defaultValue: "pending"
  }
});

module.exports = SwapRequest;

