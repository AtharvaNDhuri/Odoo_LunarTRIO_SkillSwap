const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Feedback = sequelize.define("Feedback", {
  rating: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 }
  },
  comments: DataTypes.TEXT
});

module.exports = Feedback;

