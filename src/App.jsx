import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard/ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.product))
  }, []);

  const addToCart = (product) => {
    const existsProductIdx = cart.findIndex(item => 
      item.name === product.name &&
      item.color === product.color &&
      item.size === product.size
    );
    if(!existsProductIdx){
      const updatedCart = [...cart];
      updatedCart[existsProductIdx].quantity += product.quantity; 
      setCart(updatedCart);
    }else{
      setCart([...cart, product]);
    }
  }

  const cartCount = cart.length;
  return (
    <section className="py-5">
      <div className="container">
        <div className="product-card">
          {
            products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />))
          }
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center mt-5">
              {cartCount > 0 && (
                <button type="button" className="checkout-btn fw-bold d-flex align-items-center gap-2" data-bs-toggle="modal"
                  data-bs-target="#checkout-modal">
                  Checkout <span className="checkout-qty">{cartCount}</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="modal fade" id="checkout-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="checkout-container modal-content px-3 py-4 py-md-5 px-lg-5">
              <h4 className="text-start fw-bold cart-title text-tblack">Your Cart</h4>
              <div className="pb-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Color</th>
                      <th scope="col">Size</th>
                      <th scope="col">Qnt</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody className="cart-list">
                    {cart.map((item, index) => (
                      <tr key={index}>
                          <td className="d-flex align-items-center gap-2">
                            <img src={item.img} alt={item.name} className="cart-img" />
                              <span className="ct-title">{item.name}</span>
                          </td>
                          <td>{item.color}</td>
                          <td className="fw-bold text-tblack">{item.size}</td>
                          <td className="fw-bold text-tblack ct-qty">{item.quantity}</td>
                          <td className="fw-bold text-tblack">${item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="total-row">
                      <th colSpan="3" className="fw-bold text-tblack">Total</th>
                      <th className="fw-bold text-tblack total-cart-qty">{cart.reduce((total, item) => total + item.quantity, 0)}</th>
                      <th className="fw-bold text-tblack">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-end gap-4">
                <button type="button" className="ct-btn ct-btn-outline fw-bold" data-bs-dismiss="modal">Continue
                  Shopping</button>
                <button className="ct-btn ct-btn-purpule fw-bold">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;