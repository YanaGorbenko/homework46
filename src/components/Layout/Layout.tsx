import { Outlet, useLocation } from 'react-router';
import { Navigation } from '../Navigation/Navigation';
import css from './Layout.module.css';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes('details') && (
        <header className={css.header}>
          <Navigation />
        </header>
      )}
      <main className={css.main}>{<Outlet />}</main>
    </>
  );
};
