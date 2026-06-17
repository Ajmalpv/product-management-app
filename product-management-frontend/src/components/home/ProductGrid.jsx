import ProductCard from "./ProductCard";
import { useState } from "react";
import AddProductModal from "../modals/AddProductModal";

const ProductGrid = () => {
    const products = [1, 2, 3, 4, 5, 6];
    const [showAddProduct, setShowAddProduct] = useState(false);

    return (
        <div className="flex-1">

            {/* Top Section */}
            <div className="flex justify-end items-center mb-8 mt-4 pr-8">

                {/* Action Buttons */}
                <div className="flex gap-4">

                    <button
                        className="bg-[#F4A300] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#d89000] transition">
                        Add Category
                    </button>

                    <button
                        className="
              bg-[#F4A300]
              text-white
              px-6
              py-2.5
              rounded-xl
              font-medium
              hover:bg-[#d89000]
              transition
            "
                    >
                        Add Sub Category
                    </button>

                    <button
                        onClick={() => setShowAddProduct(true)}
                        className="bg-[#F4A300] text-white px-5 py-2 rounded-xl"
                    >
                        Add Product
                    </button>

                </div>

            </div>

            {/* Product Cards */}
            <div
                className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
            >
                {products.map((item) => (
                    <ProductCard key={item} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-10">

                <p className="text-sm text-gray-500">
                    10 of 456 items
                </p>

                <div className="flex items-center gap-4">

                    <button className="w-8 h-8 rounded-full bg-[#F4A300] text-white">
                        1
                    </button>

                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>

                    <span>...</span>

                    <button>10</button>

                </div>

                <p className="text-sm text-gray-500">
                    Show 10 rows
                </p>

            </div>

            <AddProductModal
                isOpen={showAddProduct}
                onClose={() => setShowAddProduct(false)}
            />

        </div>
    );
};
export default ProductGrid;