const ProductVariableSize = ({ pSize, onSizeSelect, sizeErr, selectedSize }) => {
  const { options } = pSize;
  const productSize = options.wristSize;

  return (
    <div className="variable-size">
      <h4 className="text-tblack fw-bold">Wrist Size</h4>
      <div className="vr-sizes d-flex align-items-center gap-3">
        {productSize.map((bSize, idx) => (
          <label 
            key={idx} 
            htmlFor={`size-${idx}`}
            >
            <input 
              type="radio" 
              name="size" 
              id={`size-${idx}`} 
              onChange={() => onSizeSelect(bSize)} 
              className="d-none" 
              checked={bSize.size === selectedSize?.size} 
            />
             <div className="d-flex align-items-center gap-1">
                <span className="fw-bold">{bSize.size}</span>
                <span>$<span>{bSize.price}</span></span>
              </div>
          </label>
        ))}
      </div>
      {sizeErr && <p className="fst-italic mt-1 text-danger mb-0">{sizeErr}</p>}
    </div>
  );
};

export default ProductVariableSize;
