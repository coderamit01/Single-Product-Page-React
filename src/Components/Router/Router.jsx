
import { createBrowserRouter } from 'react-router-dom';
import Product from '../../pages/Product';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Product />
  }
])

export default Router;