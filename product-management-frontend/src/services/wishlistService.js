import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/wishlist`;

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getWishlist = async () => {
  const response = await axios.get(
    API_URL,
    getConfig()
  );

  return response.data;
};

export const addToWishlist = async (
  productId
) => {
  const response = await axios.post(
    `${API_URL}/add`,
    { productId },
    getConfig()
  );

  return response.data;
};

export const removeFromWishlist =
  async (productId) => {
    const response = await axios.post(
      `${API_URL}/remove`,
      { productId },
      getConfig()
    );

    return response.data;
  };