import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import css from '../Container/Container.module.css';

const LazyHome = lazy(() => import('pages/HomePage'));
const LazyMovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const LazyMoviesPage = lazy(() => import('pages/MoviesPage'));
const LazyCast = lazy(() => import('components/Cast/Cast'));
const LazyReviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route path="movies" element={<LazyMoviesPage />} />
            <Route path="movies/:id" element={<LazyMovieDetailsPage />}>
              <Route path="cast" element={<LazyCast />} />
              <Route path="reviews" element={<LazyReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </div>
    </Suspense>
  );
};

