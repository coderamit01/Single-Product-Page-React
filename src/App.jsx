import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard/ProductCard';

const App = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
    .then(response => response.json())
    .then(data => setProducts(data.product))
  },[]);
  return (
    <section className="py-5">
    <div className="container">
      <div className="product-card">
        {
          products.map(product => (
          <ProductCard key={product.id} product={product} />))

        }
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center mt-5">
            <button type="button" className="checkout-btn fw-bold d-flex align-items-center gap-2" data-bs-toggle="modal"
              data-bs-target="#checkout-modal">Checkout <span className="checkout-qty">1</span></button>
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
                </tbody>
                <tfoot>
                  <tr className="total-row">
                    <th colSpan="3" className="fw-bold text-tblack">Total</th>
                    <th className="fw-bold text-tblack total-cart-qty"></th>
                    <th className="fw-bold text-tblack">$<span className="cart-amount"></span></th>
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