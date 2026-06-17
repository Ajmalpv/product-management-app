import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import VariantSelector from "./VariantSelector";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = () => {
    const [selectedRam, setSelectedRam] =
        useState("4 GB");

    const [quantity, setQuantity] =
        useState(1);

    return (
        <div>

            <h1 className="text-[28px] font-bold text-[#003F63] mb-4">
                HP AMD Ryzen 3
            </h1>

            <p className="text-3xl font-bold text-gray-700 mb-6">
                $529.99
            </p>

            <div className="flex items-center gap-3 mb-3">
                <span className="font-medium">
                    Availability:
                </span>

                <span className="text-green-500">
                    ✓ In stock
                </span>
            </div>

            <p className="text-gray-500 mb-8">
                Hurry up! only 34 product left in stock!
            </p>

            <hr className="mb-8 text-gray-500" />

            <div className="mb-8">

                <p className="font-medium mb-3">
                    Ram:
                </p>

                <VariantSelector
                    selected={selectedRam}
                    setSelected={setSelectedRam}
                />

            </div>

            <div className="flex items-center gap-4 mb-10">
                <span className="font-medium">
                    Quantity :
                </span>
        
                <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>

            <div className="flex items-center gap-4">

                <button
                    className="
            bg-[#F4A300]
            text-white
            px-8
            py-3
            rounded-xl
            font-medium
          "
                >
                    Edit Product
                </button>

                <button
                    className="
            bg-[#F4A300]
            text-white
            px-8
            py-3
            rounded-xl
            font-medium
          "
                >
                    Buy It Now
                </button>

                <button
                    className="
            w-14
            h-14
            rounded-full
            bg-gray-200
            flex
            items-center
            justify-center
          "
                >
                    <FaHeart size={18} />
                </button>

            </div>

        </div>
    );
};

export default ProductInfo;