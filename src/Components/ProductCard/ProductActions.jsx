import { FaRegHeart } from "react-icons/fa6";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

const ProductActions = ({qty,handleQtyChange}) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <ProductQuantity qty={qty} onQtyChange={handleQtyChange} />
      <button className="ct-btn cart-btn ct-btn-purpule fw-bold">Add To Cart</button>
      <div className="bookmark">
        <FaRegHeart />
      </div>
    </div>
  );
};

export default ProductActions;