// services/swapService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/swaps";

export const fetchSwaps = async (userId) => {
  const res = await axios.get(`${API_URL}/${userId}`);
  return res.data;
};

export const updateSwap = async (id, status) => {
  return await axios.put(`${API_URL}/${id}`, { status });
};

export const deleteSwap = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};