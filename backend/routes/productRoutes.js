import express from "express";

import upload from "../middleware/upload.js";

import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
} from "../controllers/productController.js";

const router = express.Router();

router.post(
  "/",
  upload.array("images", 10),
  createProduct
);

router.get("/", getProducts);

router.get("/:id", getProductById);
router.put("/:id", upload.array("images", 10), updateProduct);

router.delete("/:id", deleteProduct);

export default router;