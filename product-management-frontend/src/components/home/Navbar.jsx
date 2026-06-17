import {
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#003f63] h-16 flex items-center justify-between px-10">

      <div></div>

      {/* SEARCH */}
      {/* Added rounded-2xl and overflow-hidden to the parent */}
      <div className="hidden md:flex mx-10 max-w-sm w-full">
        <div className="flex w-full h-10 rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search anything"
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
        <div className="flex items-center gap-2">
          <FaHeart />
          Wishlist
        </div>

        <div>Sign In</div>

        <div className="flex items-center gap-2">
          <FaShoppingCart />
          Cart
        </div>
      </div>
    </div>
  );
};

export default Navbar;