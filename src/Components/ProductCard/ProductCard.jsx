import { FaMinus, FaPlus, FaRegHeart, FaRegStar, FaRegStarHalf, FaStar } from 'react-icons/fa6';

const ProductCard = ({product}) => {
  const { name, img,  reviews, pricing, description, specifications, options, cart, totalReviews, currentPrice, originalPrice, addToCartText, quantity, modelNumber, type} = product;

  return (
    <div className="row g-4">
    <div className="col-md-6">
      <div className="product-img">
        <img src={img} className="img-fluid product-image" alt={name}  />
      </div>
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div className="product-details">
        <div className="d-flex flex-column align-items-start row-gap-20">
          <div>
            <h2 className="product-title">{name}</h2>
            <div className="d-flex align-items-center gap-2">
              <div className="starts d-flex align-items-center gap-1">
               <FaStar />
               <FaStar />
               <FaStar />
               <FaRegStarHalf />
               <FaRegStar />
              </div>
              <span className="review-text text-small">({reviews.totalReviews} Reviews)</span>
            </div>
          </div>
          <div className="price">
            <span className="main-price text-gray">${pricing.originalPrice}</span>
            <span className="discount-price fw-bold">${pricing.currentPrice}</span>
          </div>
          <p className="short-des text-gray">{description}</p>
          <div className="d-flex align-items-center gap-4 w-100">
            <div className="d-flex flex-column gap-1">
              <span className="text-gray text-small">Type</span>
              <span className="fw-bold fw-bold text-tblack">{specifications/type}</span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="text-gray text-small">Model Number</span>
              <span className="fw-bold fw-bold text-tblack">{specifications.modelNumber}</span>
            </div>
          </div>
          <div className="variable-color">
            <h4 className="text-tblack fw-bold">Band Color</h4>
            <div className="vr-colors d-flex align-items-center gap-3">
              <label htmlFor="1">
                <input type="radio" name="color" id="1" />
                <span className="one" data-image="img/purple.png" data-color="Purple"></span>
              </label>
              <label htmlFor="2">
                <input type="radio" name="color" id="2" />
                <span className="two" data-image="img/cyan.png" data-color="Cyan"></span>
              </label>
              <label htmlFor="3">
                <input type="radio" name="color" id="3" />
                <span className="three" data-image="img/blue.png" data-color="Blue"></span>
              </label>
              <label htmlFor="4">
                <input type="radio" name="color" id="4" />
                <span className="four" data-image="img/black.png" data-color="Black"></span>
              </label>
            </div>
            <p className="color-warning fst-italic mt-1 text-danger mb-0">Please select a color</p>
          </div>
          <div className="variable-size">
            <h4 className="text-tblack fw-bold">Wrist Size</h4>
            <div className="vr-sizes d-flex align-items-center gap-3">
              <label htmlFor="s1" className="d-flex align-items-center gap-2">
                <input type="radio" name="size" id="s1" />
                <div>
                  <span className="fw-bold">S</span>
                  <span className="one">$<span>69.00</span></span>
                </div>
              </label>
              <label htmlFor="s2" className="d-flex align-items-center gap-2">
                <input type="radio" name="size" id="s2" />
                <div>
                  <span className="fw-bold">M</span>
                  <span className="two">$<span>79.00</span></span>
                </div>
              </label>
              <label htmlFor="s3" className="d-flex align-items-center gap-2">
                <input type="radio" name="size" id="s3" />
                <div>
                  <span className="fw-bold">L</span>
                  <span className="three">$<span>89.00</span></span>
                </div>
              </label>
              <label htmlFor="s4" className="d-flex align-items-center gap-2">
                <input type="radio" name="size" id="s4" />
                <div>
                  <span className="fw-bold">XL</span>
                  <span className="four">$<span>99.00</span></span>
                </div>
              </label>
            </div>
            <p className="size-warning fst-italic mt-1 text-danger mb-0">Please select a size</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center product-count">
              <span className="d-flex align-items-center justify-content-center lh-1 minus">
                <FaMinus />
              </span>
              <span className="d-flex align-items-center justify-content-center lh-1 qty">1</span>
              <span className="d-flex align-items-center justify-content-center lh-1 plus">
                <FaPlus />
              </span>
            </div>
            <button className="ct-btn cart-btn ct-btn-purpule fw-bold">Add To Cart</button>
            <div className="bookmark">
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;