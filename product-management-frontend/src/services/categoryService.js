import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/categories`;

export const createCategory = async (name) => {
  const response = await axios.post(
    API_URL,
    { name }
  );

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(
    API_URL
  );

  return response.data;
};

export const deleteCategory = async (
  id
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};