import { useState } from "react";
import Navbar from "../components/home/Navbar";
import CategorySidebar from "../components/home/CategorySidebar";
import ProductGrid from "../components/home/ProductGrid";
import WishlistSidebar from "../components/wishlist/WishlistSidebar";
import laptopImg from "../assets/laptop.png";

const Home = () => {

  const [wishlistOpen, setWishlistOpen] = useState(false);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "HP AMD Ryzen 3",
      price: 529.99,
      image: laptopImg,
    },
    {
      id: 2,
      name: "HP AMD Ryzen 3",
      price: 529.99,
      image: laptopImg,
    },
  ]);

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="bg-white min-h-[90vh]">

        <Navbar
          setWishlistOpen={setWishlistOpen}
        />

        <div className="flex">
          <CategorySidebar />
          <ProductGrid />
        </div>

      </div>

      <WishlistSidebar
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        setWishlistItems={setWishlistItems}
      />
    </div>
  );
};

export default Home;