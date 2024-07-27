import api from "../utils/api";

export const GetName = async () => {
    try {
      const response = await api.get('/items'); // Replace with your endpoint
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  };