import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Signup function
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
    console.log("respose#### signup", response);
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
    console.log("respose#### login", response);
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

const SEARCH_URL = "http://localhost:5000/api/search-queries"; // 🔗 Your backend URL

export const saveSearchQuery = async (userId, searchQuery) => {
  try {
    const response = await axios.post(SEARCH_URL, {
      userId,
      searchQuery,
    });
    return response.data;
  } catch (error) {
    console.error("Error saving search query:", error);
    throw error;
  }
};
