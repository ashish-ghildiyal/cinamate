import React from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import PropTypes from "prop-types";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  const p = useTitle(title);
  console.log(p);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

MovieList.propTypes = {
  apiPath: PropTypes.any,
};
