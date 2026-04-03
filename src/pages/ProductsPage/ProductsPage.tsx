import { getProducts } from '../../services/productsApi.tsx';
import { useSearchParams } from 'react-router';
import { Loader } from '../../components/Loader/Loader.tsx';
import { Error } from '../../components/Error/Error.tsx';
import { ProductsList } from '../../components/ProductsList/ProductsList.tsx';
import { useQuery } from '@tanstack/react-query';
import css from './ProductPage.module.css';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = (searchParams.get('sort') || 'asc') as 'asc' | 'desc';

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = event.target.value as 'asc' | 'desc';
    setSearchParams({ sort: newOrder });
  };
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products', sortOrder],
    queryFn: () => getProducts(sortOrder),
  });

  return (
    <>
      <select
        id="sort"
        value={sortOrder}
        onChange={handleSortChange}
        className={css.sortSelect}
      >
        <option value="asc">Від А до Я</option>
        <option value="desc">Від Я до А</option>
      </select>
      <Loader loader={isLoading} />
      <Error error={isError} />
      {products && <ProductsList products={products} />}
    </>
  );
};
