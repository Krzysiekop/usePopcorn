import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoadig, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const key = "f7e1aeed";

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(false);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            setError(true);
            throw new Error("Something wrong while fetching from API");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          // console.log(data.Search);
          setMovies(data.Search);
          setIsLoading(false);
          setError(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function (params) {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoadig, error };
}
