const QuantitySelector = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="flex items-center">
      <button
        onClick={() =>
          quantity > 1 &&
          setQuantity(quantity - 1)
        }
        className="
          w-8
          h-8
          border
          border-gray-500
          bg-gray-200
          text-gray-700
        "
      >
        -
      </button>

      <div
        className="
          w-10
          h-8
          border-t
          border-b
          border-gray-500
          bg-gray-200
          flex
          items-center
          justify-center
          text-sm
        "
      >
        {quantity}
      </div>

      <button
        onClick={() =>
          setQuantity(quantity + 1)
        }
        className="
          w-8
          h-8
          border
          border-gray-500
          bg-gray-200
          text-gray-700
        "
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;