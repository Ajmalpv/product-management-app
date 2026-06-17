import Navbar from "../components/home/Navbar";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";

const ProductDetails = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span>{">"}</span>
          <span>Product Details</span>
          <span>{">"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <ProductGallery />

          <ProductInfo />

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;