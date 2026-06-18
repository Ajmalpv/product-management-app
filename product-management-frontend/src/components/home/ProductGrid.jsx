import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/productService";
import AddProductModal from "../modals/AddProductModal";
import AddCategoryModal from "../modals/AddCategoryModal";
import AddSubCategoryModal from "../modals/AddSubCategoryModal";


const ProductGrid = ({
    search,
    selectedSubCategory,
    wishlistItems,
    setWishlistItems,
}) => {
    const [products, setProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);

    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

    const [showAddSubCategoryModal, setShowAddSubCategoryModal] = useState(false);

    useEffect(() => {
        const fetchProducts =
            async () => {

                try {

                    const data =
                        await getProducts();

                    setProducts(
                        data.products
                    );

                } catch (error) {

                    console.log(error);

                }
            };

        fetchProducts();

    }, []);

    const filteredProducts =
        products.filter((product) => {

            const matchesSearch =
                product.productName
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesSubCategory =
                !selectedSubCategory ||
                product.subCategory?._id ===
                selectedSubCategory;

            return (
                matchesSearch &&
                matchesSubCategory
            );
        });
    return (
        <div className="flex-1">

            {/* Top Section */}
            <div className="flex justify-end items-center mb-13 mt-4 pr-8">

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button className="bg-[#F4A300] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#d89000] transition"
                        onClick={() =>
                            setShowAddCategoryModal(true)
                        }
                    >
                        Add category
                    </button>

                    <button className=" bg-[#F4A300] text-white  px-6 py-2.5 rounded-xl font-medium hover:bg-[#d89000] transition"
                        onClick={() =>
                            setShowAddSubCategoryModal(true)
                        }
                    >
                        Add sub category
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            wishlistItems={wishlistItems}
                            setWishlistItems={setWishlistItems}
                        />
                    ))

                ) : (

                    <div className="col-span-full text-center py-20 text-gray-500 text-lg">
                        No products found
                    </div>

                )}

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
            <AddCategoryModal
                isOpen={showAddCategoryModal}
                onClose={() =>
                    setShowAddCategoryModal(false)
                }
            />
            <AddSubCategoryModal
                isOpen={showAddSubCategoryModal}
                onClose={() =>
                    setShowAddSubCategoryModal(false)
                }
            />

        </div>
    );
};
export default ProductGrid;