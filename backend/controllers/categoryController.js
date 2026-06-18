import Category from "../models/Category.js";


// Create Category
export const createCategory = async (req, res) => {
  try {

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Category name is required",
      });
    }

    const existingCategory =
      await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const category =
      await Category.create({ name });

    res.status(201).json({
      success: true,
      category,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// Get All Categories
export const getCategories = async (
  req,
  res
) => {
  try {

    const categories =
      await Category.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      categories,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// Delete Category
export const deleteCategory = async (
  req,
  res
) => {
  try {

    await Category.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Category deleted",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};