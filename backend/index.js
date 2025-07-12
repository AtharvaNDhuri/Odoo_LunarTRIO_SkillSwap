// index.js at root
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const swapRoutes = require('./routes/swapRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const adminRoutes = require('./routes/adminRoutes');


const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/swaps', swapRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/admin', adminRoutes);


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
