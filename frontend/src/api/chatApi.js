import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function fetchModels() {
  const response = await axios.get(`${API_BASE_URL}/models`);
  return response.data.models || [];
}

export async function sendChatRequest(body) {
  const response = await axios.post(`${API_BASE_URL}/chat`, body);
  return response.data;
}
