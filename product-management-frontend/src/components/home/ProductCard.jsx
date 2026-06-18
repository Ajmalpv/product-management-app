import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";

const ProductCard = ({
  product = {},
  wishlistItems = [],
  setWishlistItems,
}) => {

  const navigate = useNavigate();
  const isWishlisted =
    wishlistItems.some(
      (item) => item._id === product._id
    );

  const handleWishlist = async (e) => {
    e.stopPropagation();

    try {
      if (isWishlisted) {
        await removeFromWishlist(
          product._id
        );

        setWishlistItems(
          wishlistItems.filter(
            (item) =>
              item._id !== product._id
          )
        );
      } else {
        await addToWishlist(
          product._id
        );

        setWishlistItems([
          ...wishlistItems,
          product,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageUrl =
    product?.images?.length > 0
      ? `${import.meta.env.VITE_API_BASE_URL}/uploads/${product.images[0]}`
      : null;
  return (
    <div
      onClick={() =>
        navigate(`/product/${product?._id || 1}`)
      }
      className="bg-white border border-gray-300 rounded-[20px] w-full max-w-[290px] h-[260px] p-5 relative flex flex-col transition-all duration-300 hover:shadow-md cursor-pointer"
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className="
          absolute
          top-5
          right-5
          w-9
          h-9
          rounded-full
          bg-[#CFE8F3]
          flex
          items-center
          justify-center
        "
      >
        <FaHeart
          size={13}
          className={
            isWishlisted
              ? "text-red-500"
              : "text-[#003F63]"
          }
        />
      </button>

      {/* Product Image */}
      <div className="flex justify-center mt-2 mb-2">
        <img
          src={
            imageUrl ||
            "https://via.placeholder.com/130"
          }
          alt={product?.productName}
          className="w-[130px] h-[100px] object-contain"
        />
      </div>

      {/* Product Name */}
      <h3
        className="
    text-[#003F63]
    font-semibold
    text-[16px]
    leading-6
    mb-2
    line-clamp-2
  "
      >
        {product?.productName || "HP AMD Ryzen 3"}
      </h3>

      {/* Product Price */}
      <p
        className="
          text-[16px]
          font-bold
          text-[#444]
          mb-4
        "
      >
        $
        {product?.variants?.[0]?.price || "529.99"}
      </p>

      {/* Rating */}
      <div className="flex gap-2 text-gray-400 mt-auto">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} size={16} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;