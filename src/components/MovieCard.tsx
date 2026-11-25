import type { MovieListItem } from '../types/movie';

// Definisce le props necessarie per il segnaposto della card film.
export interface MovieCardProps {
  movie: MovieListItem;
}

export function MovieCard(_props: MovieCardProps) {
  return <article />;
}
