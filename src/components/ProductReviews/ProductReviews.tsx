import { type Product } from '../../types/index';
import css from './ProductRewiews.module.css';
interface Props {
  reviews: Product['reviews'];
}

export const ProductReviews = ({ reviews }: Props) => {
  if (!reviews || reviews.length === 0) {
    return <p>Відгуків до цього продукту ще немає</p>;
  }

  return (
    <>
      {
        <ul className={css.reviewsList}>
          {reviews.map((review, index) => (
            <li key={index} className={css.reviewItem}>
              <h3 className={css.reviewerName}>{review.reviewerName}</h3>
              <p>
                <span className={css.span}>Електронна пошта:</span>{' '}
                {review.reviewerEmail}
              </p>
              <p>
                <span className={css.span}>Коментар: </span>
                {review.comment}
              </p>
              <p>
                <span className={css.span}>Рейтинг:</span> {review.rating}
              </p>
              <p>
                <span className={css.span}>Дата:</span> {review.date}
              </p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
