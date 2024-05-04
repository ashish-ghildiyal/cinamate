import React from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
export const Search = ({ apiPath }) => {
  const [searchparams] = useSearchParams();
  const queryTerm = searchparams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className="text-3xl dark:text-white py-3">
        <p>
          {movies.length === 0
            ? `No result found for "${queryTerm}"`
            : `Result for "${queryTerm}"`}
        </p>
      </section>
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
