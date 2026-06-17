import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const AddSubCategoryModal = ({ isOpen, onClose }) => {
    const [category, setCategory] = useState("");
    const [subCategoryName, setSubCategoryName] = useState("");

    if (!isOpen) return null;

    const handleAddSubCategory = () => {
        if (!category || !subCategoryName.trim()) return;

        console.log({
            category,
            subCategoryName,
        });

        setCategory("");
        setSubCategoryName("");
        onClose();
    };

    const handleDiscard = () => {
        setCategory("");
        setSubCategoryName("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-md rounded-2xl p-8 relative">

                {/* Close */}
                <button
                    onClick={() => {
                        setCategory("");
                        setSubCategoryName("");
                        onClose();
                    }}
                    className="absolute right-5 top-5"
                >
                    <X size={20} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
                    Add Sub Category
                </h2>

                {/* Category Select */}
                <div className="mb-4 relative">

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-600 appearance-none outline-none"
                    >
                        <option value="">
                            Select category
                        </option>

                        <option value="Laptop">
                            Laptop
                        </option>

                        <option value="Tablet">
                            Tablet
                        </option>

                        <option value="Headphones">
                            Headphones
                        </option>

                    </select>

                    <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />

                </div>

                {/* Sub Category Input */}
                <input
                    type="text"
                    placeholder="Enter sub category name"
                    value={subCategoryName}
                    onChange={(e) =>
                        setSubCategoryName(e.target.value)
                    }
                    className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-600 placeholder:text-gray-400 outline-none"
                />

                {/* Footer */}
                <div className="flex justify-center gap-4 mt-8">

                    <button
                        onClick={handleAddSubCategory}
                        className="bg-[#F4A300] text-white px-8 py-3 rounded-lg"
                    >
                        ADD
                    </button>

                    <button
                        onClick={handleDiscard}
                        className="bg-gray-200 text-gray-600 px-8 py-3 rounded-lg"
                    >
                        DISCARD
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AddSubCategoryModal;