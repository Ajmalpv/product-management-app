import { FaHeart, FaStar } from "react-icons/fa";
import laptopImg from "../../assets/laptop.png";

const ProductCard = ({
  product = {},
  likedProducts = [],
  toggleHeart = () => { },
}) => {
  return (
    <div
      className="bg-white border border-gray-300 rounded-[20px] w-full max-w-[290px] h-[260px] p-5 relative flex flex-col transition-all duration-300 hover:shadow-md "
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleHeart(product?._id);
        }}
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
            likedProducts?.includes(product?._id)
              ? "text-red-500"
              : "text-[#003F63]"
          }
        />
      </button>

      {/* Product Image */}
      <div className="flex justify-center mt-2 mb-2">
        <img
          src={laptopImg}
          alt="Laptop"
          className="w-[130px] object-contain"
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