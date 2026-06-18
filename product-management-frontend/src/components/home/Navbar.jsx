import {
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  setWishlistOpen,
  search,
  setSearch,
  wishlistItems,
}) => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };
  return (
    <div className="bg-[#003f63] h-16 flex items-center justify-between px-10">

      <div></div>

      {/* SEARCH */}
      <div className="hidden md:flex mx-10 max-w-sm w-full">
        <div className="flex w-full h-10 rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search anything"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 px-4 bg-white text-black outline-none"
          />

          <button
            className=" h-10 px-6 bg-[#F4A300] text-white font-medium rounded-xl -ml-3 relative z-10">
            Search
          </button>
        </div>
      </div>
      {/*  value={search}
     onChange={(e) => setSearch(e.target.value)} */}

      <div className="flex items-center gap-6 text-white text-sm">
        <button
          onClick={() => setWishlistOpen(true)}
          className="flex items-center gap-2 relative"
        >
          <FaHeart />

          <span>Wishlist</span>

          {wishlistItems?.length > 0 && (
            <span
              className="absolute -top-2 -right-4 min-w-[18px] h-[18px]  px-1  rounded-full bg-[#F4A300] text-white text-[10px] flex items-center justify-center">
              {wishlistItems.length}
            </span>
          )}
        </button>

        {token ? (
          <button
            onClick={handleLogout}
            className="hover:text-[#F4A300] transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hover:text-[#F4A300] transition"
          >
            Sign In
          </button>
        )}

        <div className="flex items-center gap-2">
          <FaShoppingCart />
          Cart
        </div>
      </div>
    </div>
  );
};

export default Navbar;