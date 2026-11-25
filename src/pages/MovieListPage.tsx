import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import type { MovieListItem, MovieSearchResponse } from '../types/movie';

const API_URL =
  'https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=';

// Recupera e mostra i risultati fissi della ricerca TMDB.
export function MovieListPage() {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = '0757cd68b402083daff6fe1f7fad5db9';
        if (!apiKey) {
          throw new Error('Configura VITE_TMDB_API_KEY nel file .env.local.');
        }

        const response = await fetch(`${API_URL}${apiKey}`);
        if (!response.ok) {
          throw new Error(`Errore nella richiesta TMDB: ${response.status}`);
        }

        const data: MovieSearchResponse = await response.json();
        setMovies(data.results);
      } catch {
        setError('Errore durante il caricamento.');
      } finally {
        setLoading(false);
      }
    };

    void fetchMovies();
  }, []);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
