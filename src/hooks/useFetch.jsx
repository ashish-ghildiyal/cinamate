import React, { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=55ff2137c58553211f4bfd699c8f068e&query=${queryTerm}`;
  console.log(url);
  useEffect(() => {
    async function fetchMovies() {
      let response = await fetch(url);

      let json = await response.json();

      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
