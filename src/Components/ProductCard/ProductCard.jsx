import { useState } from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductVariableColor from './ProductVariableColor';
import ProductVariableSize from './ProductVariableSize';
import ProductActions from './ProductActions';

const ProductCard = ({product,addToCart}) => {
  const {id,img,name,} = product;

  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [colorErr,setColorErr] = useState('');
  const [sizeErr,setSizeErr] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColorErr('');
  }
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeErr('');
  }
  
  const handleQtyChange = (newQty) => {
    setQty(newQty);
  };
 

  const handleAddToCart = () => {
    if (!selectedColor) {
      setColorErr('Please select a color');
      return;
    }
    if (!selectedSize) {
      setSizeErr('Please select a size');
      return;
    };
  
    const cartItem = {
      img: selectedColor.image,
      name: name,
      price: selectedSize.price,
      color: selectedColor.color,
      size: selectedSize.size,
      quantity: qty,
    };
    addToCart(cartItem); 
  };
  


  return (
    <div className="row g-4">
    <div className="col-md-6">
      <ProductImage img={selectedColor ? selectedColor.image : img} alitText={name} />
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div className="product-details">
        <div className="d-flex flex-column align-items-start row-gap-20">
          <ProductDetails product={product} />
          <ProductVariableColor pColor={product} onColorSelect={handleColorSelect} colorErr={colorErr} />
          <ProductVariableSize pSize={product} onSizeSelect={handleSizeSelect} sizeErr={sizeErr} selectedSize={selectedSize} />
          <ProductActions qty={qty} handleQtyChange={handleQtyChange} addToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;