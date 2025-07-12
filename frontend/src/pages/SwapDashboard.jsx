// pages/SwapDashboard.jsx
import React, { useEffect, useState } from "react";
import { fetchSwaps, updateSwap, deleteSwap } from "../services/swapService";
import SwapCard from "../components/SwapCard";

const SwapDashboard = ({ currentUserId }) => {
  const [swaps, setSwaps] = useState([]);

  const loadSwaps = async () => {
    const data = await fetchSwaps(currentUserId);
    setSwaps(data);
  };

  useEffect(() => {
    loadSwaps();
  }, [currentUserId]);

  const handleAccept = async (id) => {
    await updateSwap(id, "accepted");
    loadSwaps();
  };

  const handleReject = async (id) => {
    await updateSwap(id, "rejected");
    loadSwaps();
  };

  const handleDelete = async (id) => {
    await deleteSwap(id);
    loadSwaps();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Swap Requests</h2>
      {swaps.length === 0 ? (
        <p>No swaps yet.</p>
      ) : (
        swaps.map((swap) => (
          <SwapCard
            key={swap.id}
            swap={swap}
            onAccept={handleAccept}
            onReject={handleReject}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default SwapDashboard;
