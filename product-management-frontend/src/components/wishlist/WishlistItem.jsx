import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WishlistItem = ({
    product,
    onRemove,
}) => {
    const navigate = useNavigate();

    const imageUrl =
        product?.images?.length > 0
            ? `${import.meta.env.VITE_API_BASE_URL}/uploads/${product.images[0]}`
            : "https://via.placeholder.com/100";

    return (
        <div className="flex gap-3 py-5 border-b border-gray-200">

            <img
                src={imageUrl}
                alt={product.productName}
                className="w-20 h-20 border border-gray-400 rounded-xl object-cover"
            />

            <div className="flex-1 flex items-center justify-between">

                <div
                    onClick={() =>
                        navigate(
                            `/product/${product._id}`
                        )
                    }
                    className="cursor-pointer"
                >

                    <h3 className="text-sm font-medium text-[#003049]">
                        {product.productName}
                    </h3>

                    <p className="font-semibold mt-2">
                        $
                        {product?.variants?.[0]
                            ?.price || 0}
                    </p>

                    <div className="flex gap-1 mt-2 text-gray-400">
                        ★ ★ ★ ★ ★
                    </div>

                </div>

                <button
                    onClick={() =>
                        onRemove(product._id)
                    }
                    className="
                        w-7 h-7
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-300
                        text-gray-500
                        hover:bg-red-50
                        hover:text-red-500
                        hover:border-red-300
                        transition
                    "
                >
                    <X size={14} />
                </button>

            </div>

        </div>
    );
};

export default WishlistItem;