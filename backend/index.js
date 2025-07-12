// index.js at root
const express = require("express");
const cors = require("cors");
const app = express();
const swapRoutes = require("./routes/swapRoutes");

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Import Sequelize instance and sync DB
const { sequelize } = require("./models");

// Root route for health check
app.get("/", (req, res) => {
  res.send("Skill Swap Platform API is running 🚀");
});

// Sync and Start server
sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Database synced");

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Failed to sync DB:", err);
});

app.get("/", (req, res) => {
  res.send("Skill Swap Platform API is running 🚀");
});
