import { type Product } from '../../types/index';
import { Link, useLocation } from 'react-router';
import css from './ProductListItem.module.css';

interface Props {
  product: Product;
}

export const ProductListItem = ({ product }: Props) => {
  const location = useLocation();
  return (
    <li className={css.listItem}>
      <Link
        to={`${product.id}/details`}
        className={css.link}
        state={{ from: location }}
      >
        {product.title}
      </Link>
    </li>
  );
};
