const VariantSelector = ({
  variants = [],
  selected,
  setSelected,
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {variants.map((variant) => (
        <button
          key={variant.ram}
          onClick={() =>
            setSelected(variant.ram)
          }
          className={`
            min-w-[60px]
            h-[32px]
            text-sm
            bg-gray-200
            px-3
            transition-all
            duration-200

            ${
              selected === variant.ram
                ? "border border-gray-700"
                : "border border-transparent"
            }
          `}
        >
          {variant.ram}
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;