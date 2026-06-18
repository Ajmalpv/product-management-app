import SubCategory from "../models/SubCategory.js";


// Create SubCategory
export const createSubCategory = async (
  req,
  res
) => {
  try {

    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message:
          "Name and category are required",
      });
    }

    const subCategory =
      await SubCategory.create({
        name,
        category,
      });

    res.status(201).json({
      success: true,
      subCategory,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// Get All SubCategories
export const getSubCategories =
  async (req, res) => {
    try {

      const subCategories =
        await SubCategory.find()
          .populate("category", "name")
          .sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        subCategories,
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  };


// Delete SubCategory
export const deleteSubCategory =
  async (req, res) => {
    try {

      const subCategory =
        await SubCategory.findByIdAndDelete(
          req.params.id
        );

      if (!subCategory) {
        return res.status(404).json({
          message:
            "SubCategory not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "SubCategory deleted",
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  };