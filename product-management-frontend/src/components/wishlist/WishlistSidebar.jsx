import WishlistItem from "./WishlistItem";


const WishlistSidebar = ({
    isOpen,
    onClose,
    wishlistItems,
    setWishlistItems,
}) => {

    if (!isOpen) return null;

    const handleRemove = (id) => {
        setWishlistItems(
            wishlistItems.filter(
                (item) => item.id !== id
            )
        );
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-screen w-[360px] bg-white z-50">

                {/* Header */}
                <div className="bg-[#003049] text-white px-6 h-16 flex items-center justify-between">

                    <h2 className="text-xl">
                        Items
                    </h2>

                    <button onClick={onClose}>
                        &gt;
                    </button>

                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto h-[calc(100vh-64px)]">

                    {wishlistItems.length === 0 ? (

                        <div className="text-center text-gray-400 mt-20">
                            Your wishlist is empty
                        </div>

                    ) : (

                        wishlistItems.map((product) => (
                            <WishlistItem
                                key={product.id}
                                product={product}
                                onRemove={handleRemove}
                            />
                        ))

                    )}

                </div>

            </div>
        </>
    );
};

export default WishlistSidebar;