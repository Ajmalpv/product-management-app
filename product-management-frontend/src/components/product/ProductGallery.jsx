import { useState } from "react";
import laptopImg from "../../assets/Laptop.png";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(laptopImg);

  const images = [laptopImg, laptopImg];

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
          alt="Product"
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
            onClick={() => setSelectedImage(image)}
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
              alt={`Thumbnail ${index + 1}`}
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