import Product from "../models/Product.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      subCategory,
      variants,
    } = req.body;

    const imagePaths = req.files
      ? req.files.map((file) => file.filename)
      : [];

    const product = await Product.create({
      productName,
      description,
      subCategory,
      variants: JSON.parse(variants),
      images: imagePaths,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("subCategory", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Single Product
export const getProductById = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(req.params.id)
        .populate("subCategory", "name");

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Product
export const deleteProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findByIdAndDelete(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Product
export const updateProduct = async (
  req,
  res
) => {
  try {
    const {
      productName,
      description,
      subCategory,
      variants,
    } = req.body;

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let imagePaths =
      product.images;

    if (
      req.files &&
      req.files.length > 0
    ) {
      imagePaths =
        req.files.map(
          (file) => file.filename
        );
    }

    product.productName =
      productName;

    product.description =
      description;

    product.subCategory =
      subCategory;

    product.variants =
      JSON.parse(variants);

    product.images =
      imagePaths;

    const updatedProduct =
      await product.save();

    res.status(200).json({
      success: true,
      product: updatedProduct,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};