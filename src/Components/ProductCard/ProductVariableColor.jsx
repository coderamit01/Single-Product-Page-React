const ProductVariableColor = ({ pColor, colorErr, onColorSelect }) => {
  const { options } = pColor;
  const productColor = options.bandColor;

  return (
    <div className="variable-color">
      <h4 className="text-tblack fw-bold">Band Color</h4>
      <div className="vr-colors d-flex align-items-center gap-3">
        {productColor.map((pcolor, idx) => (
          <label key={idx}  htmlFor={`color-${idx}`}
           onClick={() => onColorSelect(pcolor)} >
            <input type="radio" name="color" id={`color-${idx}`} className="d-none"/>
            <span className={pcolor.color}></span>
          </label>
        ))}
      </div>
      {colorErr && <p className="fst-italic mt-1 text-danger mb-0">{colorErr}</p>}
    </div>
  );
};

export default ProductVariableColor;
