import { FaRegHeart } from "react-icons/fa6";
import ProductQuantity from "./ProductQuantity";

const ProductActions = ({qty,handleQtyChange,addToCart}) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <ProductQuantity qty={qty} onQtyChange={handleQtyChange} />
      <button className="ct-btn cart-btn ct-btn-purpule fw-bold" onClick={addToCart}>Add To Cart</button>
      <div className="bookmark">
        <FaRegHeart />
      </div>
    </div>
  );
};

export default ProductActions;