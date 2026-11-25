import { Link } from 'react-router-dom';
import { Poster } from './Poster';
import type { MovieListItem } from '../types/movie';

// Definisce le props necessarie per la card del film.
export type MovieCardProps = {
  movie: MovieListItem;
}

// Mostra i dati essenziali di un film nella card.
export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="card">
      <Poster
        posterPath={movie.poster_path}
        alt={movie.title}
        className="card__poster"
      />
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {movie.release_date} · Voto: {movie.vote_average}
        </p>
        <p className="card__overview">{movie.overview}</p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
}
