import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Check } from "lucide-react";

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

const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = useState("Laptop");

  const toggleCategory = (category) => {
    setOpenCategory(
      openCategory === category ? null : category
    );
  };

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
          className="
            font-medium
            cursor-pointer
            hover:text-[#F4A300]
            transition
          "
        >
          All Categories
        </li>

        {/* Laptop */}
        <li>
          <div
            onClick={() => toggleCategory("Laptop")}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-medium">
              Laptop
            </span>

            {openCategory === "Laptop" ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
          </div>

          {openCategory === "Laptop" && (
            <ul className="ml-6 mt-3 space-y-3 text-gray-700">
              <li>
                <FilterCheckbox label="HP" />
              </li>

              <li>
                <FilterCheckbox label="Dell" />
              </li>
            </ul>
          )}
        </li>

        {/* Tablet */}
        <li>
          <div
            onClick={() => toggleCategory("Tablet")}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-medium">
              Tablet
            </span>

            {openCategory === "Tablet" ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
          </div>

          {openCategory === "Tablet" && (
            <ul className="ml-6 mt-3 space-y-3 text-gray-700">
              <li>
                <FilterCheckbox label="Samsung" />
              </li>

              <li>
                <FilterCheckbox label="Lenovo" />
              </li>
            </ul>
          )}
        </li>

        {/* Headphones */}
        <li>
          <div
            onClick={() => toggleCategory("Headphones")}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-medium">
              Headphones
            </span>

            {openCategory === "Headphones" ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
          </div>

          {openCategory === "Headphones" && (
            <ul className="ml-6 mt-3 space-y-3 text-gray-700">
              <li>
                <FilterCheckbox label="Sony" />
              </li>

              <li>
                <FilterCheckbox label="JBL" />
              </li>
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
};

export default CategorySidebar;