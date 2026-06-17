import Navbar from "../components/home/Navbar";
import CategorySidebar from "../components/home/CategorySidebar";
import ProductGrid from "../components/home/ProductGrid";
import ProductCard from "../components/home/ProductCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="bg-white min-h-[90vh]">
        <Navbar />

        <div className="flex">
          <CategorySidebar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Home;