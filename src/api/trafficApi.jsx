import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const predictTraffic = async (source, destination) => {
  try {
    const response = await axios.post(`${API_URL}/predict-traffic`, {
      source,
      destination,
    });
    return response.data;
  } catch (error) {
    console.error('Error predicting traffic:', error);
    throw error;
  }
};
