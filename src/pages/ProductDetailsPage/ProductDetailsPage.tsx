import { Link, useParams } from 'react-router';
import { getProductById } from '../../services/productsApi.tsx';
import { Loader } from '../../components/Loader/Loader.tsx';
import { Error } from '../../components/Error/Error.tsx';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.tsx';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router';
import { Outlet } from 'react-router';
import css from './ProductDetailsPage.module.css';

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoBack = () => {
    navigate(location.state?.from || '/products');
  };

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId!),
    enabled: !!productId,
  });

  return (
    <>
      <button onClick={handleGoBack} className={css.backButton}>
        Повернутись назад
      </button>
      <Loader loader={isLoading} />
      <Error error={isError} />
      {product && <ProductDetails product={product} />}
      <Link to="reviews" state={location.state} className={css.reviewsLink}>
        Подивитись відгуки
      </Link>
      <Outlet />
    </>
  );
};
