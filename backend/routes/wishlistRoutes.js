import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getWishlist
);

router.post(
  "/add",
  protect,
  addToWishlist
);

router.post(
  "/remove",
  protect,
  removeFromWishlist
);

export default router;