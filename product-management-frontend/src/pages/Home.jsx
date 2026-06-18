import { useState } from "react";
import Navbar from "../components/home/Navbar";
import CategorySidebar from "../components/home/CategorySidebar";
import ProductGrid from "../components/home/ProductGrid";
import WishlistSidebar from "../components/wishlist/WishlistSidebar";
import laptopImg from "../assets/laptop.png";
import { useOutletContext } from "react-router-dom";

const Home = () => {

  const {
    search,
    selectedSubCategory,
    setSelectedSubCategory,
    wishlistItems,
    setWishlistItems,
  } = useOutletContext();

  console.log(selectedSubCategory);


  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="bg-white min-h-[90vh]">

        {/* <Navbar
          setWishlistOpen={setWishlistOpen}
        /> */}

        <div className="flex">
          <CategorySidebar
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
          <ProductGrid
            search={search}
            selectedSubCategory={selectedSubCategory}
            wishlistItems={wishlistItems}
            setWishlistItems={setWishlistItems}
          />
        </div>

      </div>

      {/* <WishlistSidebar
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        setWishlistItems={setWishlistItems}
      /> */}
    </div>
  );
};

export default Home;