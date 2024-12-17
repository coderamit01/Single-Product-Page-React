import { FaMinus, FaPlus, FaRegHeart, FaRegStar, FaRegStarHalf, FaStar } from 'react-icons/fa6';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import { useState } from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductVariableColor from './ProductVariableColor';
import ProductVariableSize from './ProductVariableSize';
import ProductActions from './ProductActions';

const ProductCard = ({product}) => {
  const { name, img} = product;

  const [qty, setQty] = useState(1);
  const [currentImg, setCurrentImg] = useState(img);

  const handleQtyChange = (newQty) => {
    setQty(newQty);
  };
  const handleImgChange = (newImg) => {
    setCurrentImg(newImg);
  }

  return (
    <div className="row g-4">
    <div className="col-md-6">
      <ProductImage img={currentImg} alitText={name} />
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div className="product-details">
        <div className="d-flex flex-column align-items-start row-gap-20">
          <ProductDetails product={product} />
          <ProductVariableColor pColor={product} onColorChange={handleImgChange} />
          <ProductVariableSize pSize={product} />
          <ProductActions qty={qty} handleQtyChange={handleQtyChange} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;