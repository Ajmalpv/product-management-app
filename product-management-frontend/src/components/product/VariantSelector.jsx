const VariantSelector = ({
  selected,
  setSelected,
}) => {
  const variants = ["4 GB", "8 GB", "16 GB"];

  return (
    <div className="flex gap-3">
      {variants.map((item) => (
        <button
          key={item}
          onClick={() => setSelected(item)}
          className={`
            min-w-[60px]
            h-[32px]
            text-sm
            bg-gray-200
            transition-all
            duration-200

            ${
              selected === item
                ? "border border-gray-700"
                : "border border-transparent"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;