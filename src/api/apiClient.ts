// src/api/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  // Set the base URL for all API requests
  baseURL: 'http://localhost:8080/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;