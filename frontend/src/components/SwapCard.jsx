// components/SwapCard.jsx
import React from "react";

const SwapCard = ({ swap, onAccept, onReject, onDelete }) => {
  const { id, sender, receiver, senderSkill, receiverSkill, status } = swap;

  return (
    <div className="border rounded-xl p-4 shadow-sm mb-4">
      <h3 className="font-semibold text-lg mb-1">
        {sender?.name} wants to swap {senderSkill?.name} with {receiver?.name}'s {receiverSkill?.name}
      </h3>
      <p className="mb-2">Status: <strong>{status}</strong></p>
      {status === "pending" && (
        <div className="flex gap-2">
          <button onClick={() => onAccept(id)} className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
          <button onClick={() => onReject(id)} className="bg-yellow-500 text-white px-3 py-1 rounded">Reject</button>
          <button onClick={() => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      )}
    </div>
  );
};

export default SwapCard;