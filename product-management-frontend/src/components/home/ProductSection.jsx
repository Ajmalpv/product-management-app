import ProductGrid from "./ProductGrid";

function ProductSection({
  products,
  likedProducts,
  toggleHeart,
  navigate,
  page,
  totalPages,
  setPage,
  setCategoryModal,
  setsubCategoryModal,
  setmodalstatus,
}) {
  return (
    <div className="flex-1 min-w-0">

      <div className="text-sm text-gray-500 mb-5">
        Home &gt;
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <div className="flex flex-wrap justify-end gap-3 mb-8">

          <button
            onClick={() => setCategoryModal(true)}
            className="
              bg-[#F4A300]
              text-white
              px-5
              py-2.5
              rounded-full
              font-medium
            "
          >
            Add Category
          </button>

          <button
            onClick={() => setsubCategoryModal(true)}
            className="
              bg-[#F4A300]
              text-white
              px-5
              py-2.5
              rounded-full
              font-medium
            "
          >
            Add Sub Category
          </button>

          <button
            onClick={() => setmodalstatus(true)}
            className="
              bg-[#F4A300]
              text-white
              px-5
              py-2.5
              rounded-full
              font-medium
            "
          >
            Add Product
          </button>

        </div>

        <ProductGrid
          products={products}
          likedProducts={likedProducts}
          toggleHeart={toggleHeart}
          navigate={navigate}
        />

        <div className="flex justify-center items-center gap-3 mt-10">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="
              px-4 py-2
              border
              rounded-full
              disabled:opacity-50
            "
          >
            Prev
          </button>

          <span className="font-medium">
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="
              px-4 py-2
              border
              rounded-full
              disabled:opacity-50
            "
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductSection;