import { useState } from "react";
import { X } from "lucide-react";

const AddCategoryModal = ({ isOpen, onClose }) => {
    const [categoryName, setCategoryName] = useState("");

    if (!isOpen) return null;

    const handleAddCategory = () => {
        if (!categoryName.trim()) return;

        console.log("New Category:", categoryName);

        setCategoryName("");
        onClose();
    };

    const handleDiscard = () => {
        setCategoryName("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-md rounded-2xl p-8 relative">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
                    Add Category
                </h2>

                <input
                    type="text"
                    placeholder="Enter category name"
                    value={categoryName}
                    onChange={(e) =>
                        setCategoryName(e.target.value)
                    }
                    className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-600 placeholder:text-gray-400 outline-none"
                />

                <div className="flex justify-center gap-4 mt-8">

                    <button
                        onClick={handleAddCategory}
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

export default AddCategoryModal;