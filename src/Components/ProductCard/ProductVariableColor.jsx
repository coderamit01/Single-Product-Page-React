
const ProductVariableColor = ({ pColor,onColorChange }) => {
  const { options } = pColor;
  const productColor = options.bandColor;
  return (
    <div className="variable-color">
    <h4 className="text-tblack fw-bold">Band Color</h4>
    <div className="vr-colors d-flex align-items-center gap-3">
      {
        productColor.map((pcolor,idx) => (
          <label key={idx} htmlFor={`c${idx}`} onChange={() => onColorChange(pcolor.image)}>
          <input type="radio" name="color" id={`c${idx}`} />
          <span className={pcolor.color} data-image={pcolor.image} data-color={pcolor.color}></span>
        </label>
        ))
      }
    </div>
    <p className="color-warning fst-italic mt-1 text-danger mb-0">Please select a color</p>
  </div>
  );
};

export default ProductVariableColor;