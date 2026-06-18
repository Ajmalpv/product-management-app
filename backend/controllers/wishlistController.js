import User from "../models/User.js";

// Add Product To Wishlist
export const addToWishlist = async (
    req,
    res
) => {
    try {
        const { productId } = req.body;

        const user = await User.findById(
            req.user._id
        );

        const alreadyExists =
            user.wishlist.some(
                (id) =>
                    id &&
                    id.toString() === productId
            );

        if (!alreadyExists) {
            user.wishlist.push(productId);

            await user.save();
        }

        res.status(200).json({
            success: true,
            wishlist: user.wishlist,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};


// Remove Product From Wishlist
export const removeFromWishlist =
    async (req, res) => {
        try {

            const { productId } = req.body;

            const user =
                await User.findById(
                    req.user._id
                );

            user.wishlist = user.wishlist.filter(
                (id) =>
                    id &&
                    id.toString() !== productId
            );

            await user.save();

            res.status(200).json({
                success: true,
                wishlist: user.wishlist,
            });

        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Server Error",
            });
        }
    };


// Get Wishlist
export const getWishlist =
    async (req, res) => {
        try {

            const user =
                await User.findById(
                    req.user._id
                ).populate("wishlist");

            res.status(200).json({
                success: true,
                wishlist: user.wishlist,
            });

        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Server Error",
            });
        }
    };