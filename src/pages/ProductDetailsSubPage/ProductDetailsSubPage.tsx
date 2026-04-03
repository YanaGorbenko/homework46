import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/productsApi.tsx';
import { Loader } from '../../components/Loader/Loader.tsx';
import { Error } from '../../components/Error/Error.tsx';
import { ProductReviews } from '../../components/ProductReviews/ProductReviews.tsx';

export const ProductDetailsSubPage = () => {
  const { productId } = useParams();
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
      <Loader loader={isLoading} />
      <Error error={isError} />
      {product && <ProductReviews reviews={product.reviews} />}
    </>
  );
};
