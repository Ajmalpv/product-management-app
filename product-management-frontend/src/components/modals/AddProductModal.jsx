import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ImagePlus, Trash2 } from "lucide-react";
import { getSubCategories } from "../../services/subCategoryService";
import { createProduct, updateProduct } from "../../services/productService";

const AddProductModal = ({
    isOpen,
    onClose,
    product = null,
}) => {
    const [productName, setProductName] = useState("");

    const [description, setDescription] = useState("");

    const [subcategory, setSubcategory] = useState("");
    useEffect(() => {

        if (product) {

            setProductName(
                product.productName || ""
            );

            setDescription(
                product.description || ""
            );

            setSubcategory(
                product.subCategory?._id || ""
            );

            setVariants(
                product.variants || []
            );
            setImages(product.images || []);
        }

    }, [product]);
    const [subCategories, setSubCategories] = useState([]);

    const [variants, setVariants] = useState([
        {
            ram: "",
            price: "",
            quantity: 1,
        },
    ]);

    const [images, setImages] = useState([]);

    useEffect(() => {

        const fetchSubCategories =
            async () => {

                try {

                    const data =
                        await getSubCategories();

                    setSubCategories(
                        data.subCategories
                    );

                } catch (error) {

                    console.log(error);

                }
            };

        if (isOpen) {
            fetchSubCategories();
        }

    }, [isOpen]);

    if (!isOpen) return null;

    const handleAddVariant = () => {
        setVariants([
            ...variants,
            {
                ram: "",
                price: "",
                quantity: 1,
            },
        ]);
    };
    const handleDeleteVariant = (indexToDelete) => {
        if (variants.length === 1) return;

        setVariants(
            variants.filter(
                (_, index) => index !== indexToDelete
            )
        );
    };

    const handleImageUpload = (e) => {
        const files = Array.from(
            e.target.files
        );

        setImages((prev) => [
            ...prev,
            ...files,
        ]);
    };
    const handleAddProduct = async () => {

        try {

            const formData = new FormData();

            formData.append(
                "productName",
                productName
            );

            formData.append(
                "description",
                description
            );

            formData.append(
                "subCategory",
                subcategory
            );

            formData.append(
                "variants",
                JSON.stringify(variants)
            );

            images.forEach((image) => {

                if (image instanceof File) {

                    formData.append(
                        "images",
                        image
                    );

                }

            });

            if (product) {

                await updateProduct(
                    product._id,
                    formData
                );

                alert(
                    "Product updated successfully"
                );

            } else {

                await createProduct(
                    formData
                );

                alert(
                    "Product added successfully"
                );
            }

            handleDiscard();

            onClose();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to add product"
            );
        }
    };

    const handleDiscard = () => {
        setProductName("");
        setDescription("");
        setSubcategory("");
        setImages([]);

        setVariants([
            {
                ram: "",
                price: "",
                quantity: 1,
            },
        ]);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-12 z-50 p-4">

            <div className="bg-white w-fullmax-w-[700px] rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto scrollbar-hide">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6"
                >
                    <X size={20} />
                </button>

                <h2 className="text-3xl font-semibold text-center mb-10">
                    {product
                        ? "Edit Product"
                        : "Add Product"}
                </h2>

                <div className="space-y-8">

                    {/* Title */}
                    <div className="grid grid-cols-[140px_1fr] items-center gap-4 border-gray-500">
                        <label className="text-gray-600">
                            Title :
                        </label>

                        <input
                            value={productName}
                            onChange={(e) =>
                                setProductName(
                                    e.target.value
                                )
                            }
                            type="text"
                            placeholder="Product Title"
                            className="border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Variants */}
                    <div className="grid grid-cols-[140px_1fr] gap-4">
                        <label className="text-gray-600 pt-3">
                            Variants :
                        </label>
                        <div>
                            {variants.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 mb-4">
                                    <label className="text-gray-500 text-sm">
                                        Ram:
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="4 GB"
                                        value={item.ram}
                                        onChange={(e) => {
                                            const updated = [...variants];
                                            updated[index].ram = e.target.value;
                                            setVariants(updated);
                                        }}
                                        className="border rounded-lg px-3 py-2 w-[100px]" />

                                    <label className="text-gray-500 text-sm">
                                        Price:
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="$529.99"
                                        value={item.price}
                                        onChange={(e) => {
                                            const updated = [...variants];
                                            updated[index].price = e.target.value;
                                            setVariants(updated);
                                        }}
                                        className="border rounded-lg px-3 py-2 w-[110px]" />

                                    <label className="text-gray-500 text-sm">
                                        QTY:
                                    </label>

                                    <div className="flex items-center h-[42px] border rounded-lg overflow-hidden">

                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updated = [...variants];

                                                if (updated[index].quantity > 1) {
                                                    updated[index].quantity--;
                                                    setVariants(updated);
                                                }
                                            }}
                                            className="h-full px-3 flex items-center justify-center">
                                            <ChevronLeft size={16} />
                                        </button>

                                        <div className="w-12 h-full flex items-center justify-center">
                                            {item.quantity}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updated = [...variants];
                                                updated[index].quantity++;
                                                setVariants(updated);
                                            }}
                                            className="h-full px-3 flex items-center justify-center">
                                            <ChevronRight size={16} />
                                        </button>

                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteVariant(index)}
                                        disabled={variants.length === 1}
                                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${variants.length > 1
                                            ? "text-red-500 hover:bg-red-50"
                                            : "opacity-0 cursor-default"
                                            }`}
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </div>
                            ))}

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleAddVariant}
                                    className="bg-[#3F3F3F] text-white px-6 py-2 rounded-lg ">
                                    Add Variants
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Sub Category */}
                    <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                        <label className="text-gray-600">
                            Sub category :
                        </label>
                        <select
                            value={subcategory}
                            onChange={(e) => setSubcategory(e.target.value)}
                            className="border rounded-lg px-4 py-3">

                            <option value="">
                                Select Sub Category
                            </option>

                            {subCategories.map((sub) => (
                                <option
                                    key={sub._id}
                                    value={sub._id}
                                >
                                    {sub.name}
                                </option>
                            ))}

                        </select>
                    </div>

                    {/* Description */}
                    <div className="grid grid-cols-[140px_1fr] gap-4">
                        <label className="text-gray-600 pt-3">
                            Description :
                        </label>

                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)}
                            className="border rounded-lg px-4 py-3 resize-none" />
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-[140px_1fr] gap-4">

                        <label className="text-gray-600 pt-3">
                            Upload image :
                        </label>

                        <div>
                            <div className="flex gap-4 flex-wrap">
                                {images.map((image, index) => (

                                    <img
                                        key={index}
                                        src={
                                            typeof image === "string"
                                                ? `${import.meta.env.VITE_API_BASE_URL}/uploads/${image}`
                                                : URL.createObjectURL(image)
                                        }
                                        alt=""
                                        className="w-24 h-24 border rounded-lg object-cover"
                                    />

                                ))}

                                <label
                                    className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer">
                                    <ImagePlus
                                        size={24}
                                        className="text-gray-400"
                                    />

                                    <input
                                        type="file"
                                        multiple
                                        hidden
                                        onChange={handleImageUpload} />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-4">

                        <button
                            onClick={handleAddProduct}
                            className="bg-[#F4A300] text-white px-8 py-3 rounded-lg">
                            {product
                                ? "UPDATE"
                                : "ADD"}
                        </button>

                        <button
                            onClick={handleDiscard}
                            className=" bg-gray-200 px-8 py-3 rounded-lg">
                            DISCARD
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddProductModal;