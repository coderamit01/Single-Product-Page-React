
const ProductImage = ({img,alitText}) => {
  return (
    <div className="product-img">
        <img src={img} className="img-fluid product-image" alt={alitText}  />
      </div>
  );
};

export default ProductImage;