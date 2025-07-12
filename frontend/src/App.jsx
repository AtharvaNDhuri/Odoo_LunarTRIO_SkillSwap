// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwapDashboard from "./pages/SwapDashboard";

function App() {
  const currentUserId = 1; // TODO: replace with logged-in user ID or context

  return (
    <Router>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Skill Swap Platform</h1>
        <Routes>
          <Route path="/" element={<SwapDashboard currentUserId={currentUserId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;