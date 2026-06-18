import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import VariantSelector from "./VariantSelector";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = ({ product, onEdit }) => {
    const [selectedRam, setSelectedRam] =
        useState("");

    useEffect(() => {
        if (product?.variants?.length) {
            setSelectedRam(
                product.variants[0].ram
            );
        }
    }, [product]);

    const selectedVariant =
        product?.variants?.find(
            (variant) =>
                variant.ram === selectedRam
        );

    const [quantity, setQuantity] =
        useState(1);

    console.log(product?.variants);

    return (
        <div>

            <h1 className="text-[28px] font-bold text-[#003F63] mb-4">
                {product?.productName}
            </h1>

            <p className="text-3xl font-bold text-gray-700 mb-6">
                ${selectedVariant?.price}
            </p>

            <div className="flex items-center gap-3 mb-3">
                <span className="font-medium">
                    Availability:
                </span>

                <span className="text-green-500">
                    ✓ in stock
                </span>
            </div>

            <p className="text-gray-500 mb-8">
                Hurry up! only {selectedVariant?.quantity} product left in stock!
            </p>

            <p className="text-gray-500 mb-8">
                {product?.description}
            </p>

            <hr className="mb-8 text-gray-500" />

            <div className="mb-8">

                <p className="font-medium mb-3">
                    Ram:
                </p>

                <VariantSelector
                    variants={product?.variants}
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
                    onClick={onEdit}
                    className="bg-[#F4A300] text-white px-8 py-3 rounded-xl font-medium ">
                    Edit Product
                </button>

                <button
                    className="bg-[#F4A300] text-white px-8 py-3 rounded-xl font-medium">
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