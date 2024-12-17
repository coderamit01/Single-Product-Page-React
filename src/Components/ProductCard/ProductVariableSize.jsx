
const ProductVariableSize = ({ pSize }) => {
  const { options } = pSize;
  const productSize = options.wristSize;
  return (
    <div className="variable-size">
      <h4 className="text-tblack fw-bold">Wrist Size</h4>
      <div className="vr-sizes d-flex align-items-center gap-3">
        {
          productSize.map((bSize, idx) => (
            <label key={idx} htmlFor={`s${idx}`} className="d-flex align-items-center gap-2">
              <input type="radio" name="size" id={`s${idx}`} />
              <div className="d-flex align-items-center gap-1">
                <span className="fw-bold">{bSize.size}</span>
                <span>$<span>{bSize.price}</span></span>
              </div>
            </label>
          ))
        }
      </div>
      <p className="size-warning fst-italic mt-1 text-danger mb-0">Please select a size</p>
    </div>
  );
};

export default ProductVariableSize;