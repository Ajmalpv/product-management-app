import { useState, useEffect } from "react";
import { getWishlist } from "../services/wishlistService";
import { Outlet } from "react-router-dom";

import Navbar from "../components/home/Navbar";
import WishlistSidebar from "../components/wishlist/WishlistSidebar";

const MainLayout = () => {
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const [wishlistItems, setWishlistItems] =
        useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const token =
                    localStorage.getItem("token");

                if (!token) return;

                const data =
                    await getWishlist();

                setWishlistItems(
                    data.wishlist
                );
            } catch (error) {
                console.log(error);
            }
        };

        fetchWishlist();
    }, []);

    return (
        <>
            <Navbar
                setWishlistOpen={setWishlistOpen}
                search={search}
                setSearch={setSearch}
                wishlistItems={wishlistItems}
            />

            <Outlet
                context={{
                    search,
                    selectedSubCategory,
                    setSelectedSubCategory,
                    wishlistItems,
                    setWishlistItems,
                }}
            />
            <WishlistSidebar
                isOpen={wishlistOpen}
                onClose={() => setWishlistOpen(false)}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
            />
        </>
    );
};

export default MainLayout;