import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage/HomePage';
import { ProductsPage } from '../../pages/ProductsPage/ProductsPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage/ProductDetailsPage';
import { ProductDetailsSubPage } from '../../pages/ProductDetailsSubPage/ProductDetailsSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route
          path="products/:productId/details"
          element={<ProductDetailsPage />}
        >
          <Route path="reviews" element={<ProductDetailsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
