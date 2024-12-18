import StarFilled from "../Shared/StarFilled";
import HalfStar from "../Shared/HalfStar";
import Star from "../Shared/Star";
import ReviewStar from "./ReviewStar";

const ProductDetails = ({ product }) => {
  const { name, reviews, pricing, description, specifications } = product;
  return (
    <>
      <div>
        <h2 className="product-title">{name}</h2>
        <div className="d-flex align-items-center gap-2">
          <div className="starts d-flex align-items-center gap-1">
            <ReviewStar star={reviews?.rating || 0} />
          </div>
          <span className="review-text text-small">({reviews.totalReviews} Reviews)</span>
        </div>
      </div>
      <div className="price d-flex align-items-center gap-1">
        <span className="main-price text-gray">${pricing.originalPrice.toFixed(2)} </span>
        <span className="discount-price fw-bold">${pricing.currentPrice.toFixed(2)}</span>
      </div>
      <p className="short-des text-gray">{description}</p>
      <div className="d-flex align-items-center gap-4 w-100">
        <div className="d-flex flex-column gap-1">
          <span className="text-gray text-small">Type</span>
          <span className="fw-bold fw-bold text-tblack">{specifications.type}</span>
        </div>
        <div className="d-flex flex-column gap-1">
          <span className="text-gray text-small">Model Number</span>
          <span className="fw-bold fw-bold text-tblack">{specifications.modelNumber}</span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;