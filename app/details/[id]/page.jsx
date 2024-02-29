import React from "react";
import MovieDetails from ".";
import { getMovieDetails } from "./getMovieDetails";

export default async function MovieDetailPage({ params: { id } }) {
  const movies = await getMovieDetails(id);
  if (!movies) return <>Error</>;

  return <MovieDetails id={id} movie={movies} />;
}
