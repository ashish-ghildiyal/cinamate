import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, PageNotFound, Search } from "../pages";
export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="home" />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="upcoming" />}
        />
        <Route
          path="/movies/top_rated"
          element={<MovieList apiPath="movie/top_rated" title="top rated" />}
        />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
