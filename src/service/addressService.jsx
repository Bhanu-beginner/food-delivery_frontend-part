// services/addressService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/addresses';

export const addAddress = async (address) => {
  try {
    const response = await axios.post(`${API_URL}/add`, address);
    return response.data;
  } catch (error) {
    console.error('Error adding address:', error);
    throw error;
  }
};

export const getAddresses = async () => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching addresses:', error);
    throw error;
  }
};
