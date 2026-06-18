import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/subcategories`;

export const createSubCategory = async (
  subCategoryData
) => {
  const response = await axios.post(
    API_URL,
    subCategoryData
  );

  return response.data;
};

export const getSubCategories =
  async () => {
    const response = await axios.get(
      API_URL
    );

    return response.data;
  };

export const deleteSubCategory =
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/${id}`
    );

    return response.data;
  };