import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Check } from "lucide-react";
import { getSubCategories } from "../../services/subCategoryService";
import { getCategories } from "../../services/categoryService";

const FilterCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className="flex items-center gap-3 cursor-pointer select-none"
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`
          w-4 h-4 rounded-sm
          flex items-center justify-center
          transition-all duration-200
          ${checked ? "bg-black" : "bg-gray-400"}
        `}
      >
        {checked && (
          <Check
            size={12}
            strokeWidth={3}
            className="text-white"
          />
        )}
      </div>

      <span>{label}</span>
    </label>
  );
};

const CategorySidebar = ({
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const [openCategory, setOpenCategory] = useState(null);

  const [categories, setCategories] = useState([]);

  const [subCategories, setSubCategories] = useState([]);

  const toggleCategory = (category) => {
    setOpenCategory(
      openCategory === category ? null : category
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {

        const categoryData =
          await getCategories();

        const subCategoryData =
          await getSubCategories();

        setCategories(
          categoryData.categories
        );

        setSubCategories(
          subCategoryData.subCategories
        );

      } catch (error) {

        console.log(error);

      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[360px] px-16 py-10">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        Home &gt;
      </div>

      {/* Heading */}
      <h3 className="text-lg font-semibold text-[#003F63] mb-6">
        Categories
      </h3>

      <ul className="space-y-5">

        {/* All Categories */}
        <li
          onClick={() =>
            setSelectedSubCategory("")}
          className={` font-medium cursor-pointer transition ${!selectedSubCategory
            ? "text-[#F4A300]"
            : ""}`}>
          All Categories
        </li>
        {/* Tablet */}
        {categories.map((category) => (

          <li key={category._id}>

            <div
              onClick={() =>
                toggleCategory(category._id)
              }
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="font-medium">
                {category.name}
              </span>

              {openCategory === category._id ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}

            </div>

            {openCategory === category._id && (

              <ul className="ml-6 mt-3 space-y-3 text-gray-700">

                {subCategories
                  .filter(
                    (sub) =>
                      sub.category?._id ===
                      category._id
                  )
                  .map((sub) => (

                    <label
                      key={sub._id}
                      onClick={() =>
                        setSelectedSubCategory(
                          selectedSubCategory === sub._id
                            ? ""
                            : sub._id
                        )
                      }
                      className="flex items-center gap-3 cursor-pointer"
                    >

                      <div
                        className={` w-4 h-4 rounded-sm flex items-center justify-center ${selectedSubCategory === sub._id
                            ? "bg-black"
                            : "bg-gray-400" } `}>
                        {selectedSubCategory === sub._id && (
                          <Check
                            size={12}
                            strokeWidth={3}
                            className="text-white"
                          />
                        )}
                      </div>

                      <span>{sub.name}</span>

                    </label>

                  ))}

              </ul>

            )}

          </li>

        ))}

      </ul>
    </div>
  );
};

export default CategorySidebar;