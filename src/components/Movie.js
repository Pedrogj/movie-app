import React from "react";
import { useParams } from "react-router";
// Components
import PosterInfo from "./PosterInfo/PosterInfo";
import Spinner from "./Spinner/Spinner";
import MovieInfo from "./MovieInfo/MovieInfo";
// Hook
import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  //console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <div>Algo no anda bien...</div>;

  return (
    <>
      <PosterInfo movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
