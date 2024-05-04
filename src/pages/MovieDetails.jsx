import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const param = useParams();

  const [movie, setMovie] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=55ff2137c58553211f4bfd699c8f068e`;
  console.log(url);
  useEffect(() => {
    async function fetchMovies() {
      let response = await fetch(url);

      let json = await response.json();

      setMovie(json);
    }
    fetchMovies();
  }, [url]);

  const { poster_path, title, overview } = movie;
  console.log(movie.genres);

  return (
    <main>
      <section className="flex p-5">
        <div className="left">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        </div>
        <div className="right p-5 text-left">
          <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {title}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
          {movie.genres ? (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};
