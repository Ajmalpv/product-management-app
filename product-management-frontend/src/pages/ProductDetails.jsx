import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import AddProductModal from "../components/modals/AddProductModal";

import { getProductById } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [showEditModal, setShowEditModal] =
    useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }
  console.log(product);
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span>{">"}</span>
          <span>Product Details</span>
          <span>{">"}</span>
          <span>{product.productName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
            onEdit={() =>
              setShowEditModal(true)
            }
          />

        </div>

      </div>
      <AddProductModal
        isOpen={showEditModal}
        onClose={() =>
          setShowEditModal(false)
        }
        product={product}
      />
    </div>
  );
};

export default ProductDetails;