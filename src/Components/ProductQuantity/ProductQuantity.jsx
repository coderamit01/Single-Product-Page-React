import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const ProductQuantity = ({ qty, onQtyChange }) => {
  const [quantity, setQuantity] = useState(qty);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQtyChange(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
    onQtyChange(quantity + 1);
  };

  return (
    <div className="d-flex align-items-center product-count">
      <span
        className="d-flex align-items-center justify-content-center lh-1 minus"
        onClick={handleMinus}
      >
        <FaMinus />
      </span>
      <span className="d-flex align-items-center justify-content-center lh-1 qty">
        {quantity}
      </span>
      <span
        className="d-flex align-items-center justify-content-center lh-1 plus"
        onClick={handlePlus}
      >
        <FaPlus />
      </span>
    </div>
  );
};

export default ProductQuantity;
