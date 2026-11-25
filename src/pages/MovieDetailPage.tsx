import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Poster } from '../components/Poster';
import { Tag } from '../components/Tag';
import type { MovieDetail } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Carica e mostra la pagina.
export function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(null);
      setLoading(true);
      setError(null);

      try {
        if (!id) {
          throw new Error();
        }

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(`Errore nella richiesta TMDB: ${response.status}`);
        }

        const data: MovieDetail = await response.json();
        setMovie(data);
      } catch {
        setError('Errore durante il caricamento.');
      } finally {
        setLoading(false);
      }
    };

    void fetchMovie();
  }, [id]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error || !movie) {
    return <p role="alert">{error ?? 'Errore durante il caricamento.'}</p>;
  }

  return (
    <>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>
      <article className="detail">
        <div>
          <Poster
            posterPath={movie.poster_path}
            alt={movie.title}
            className="detail__poster"
          />
        </div>
        <div>
          <h1 className="detail__title">{movie.title}</h1>
          {movie.tagline && <p className="detail__tagline">{movie.tagline}</p>}

          <ul className="detail__meta">
            <li>Uscita: {movie.release_date}</li>
            <li>Durata: {movie.runtime} min</li>
            <li>Voto: {movie.vote_average}</li>
            <li>Voti: {movie.vote_count}</li>
            <li>Stato: {movie.status}</li>
            <li>Lingua: {movie.original_language}</li>
          </ul>

          <div className="detail__genres">
            {movie.genres.map((genre) => (
              <Tag key={genre.id} label={genre.name} />
            ))}
          </div>

          <p className="detail__overview-label">Trama</p>
          <p className="detail__overview">{movie.overview}</p>

          <p className="card__meta">
            Produzione: {movie.production_companies.map((company) => company.name).join(' · ')}
          </p>
        </div>
      </article>
    </>
  );
}
