import { useState, useEffect } from "react";

const ProductGallery = ({ product }) => {

  const images =
    product?.images?.map(
      (image) =>
        `http://localhost:5000/uploads/${image}`
    ) || [];

  const [selectedImage, setSelectedImage] =
    useState(images[0]);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [product]);

  return (
    <div>

      {/* Main Image */}
      <div
        className="
          border
          border-gray-300
          rounded-2xl
          bg-white
          h-[500px]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src={selectedImage}
          alt={product?.productName}
          className="
            max-w-full
            max-h-full
            object-contain
            p-8
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4">

        {images.map((image, index) => (

          <div
            key={index}
            onClick={() =>
              setSelectedImage(image)
            }
            className="
              border
              border-gray-300
              rounded-2xl
              w-[180px]
              h-[110px]
              flex
              items-center
              justify-center
              overflow-hidden
              cursor-pointer
              hover:border-[#F4A300]
              transition
            "
          >
            <img
              src={image}
              alt=""
              className="
                w-full
                h-full
                object-contain
              "
            />
          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductGallery;