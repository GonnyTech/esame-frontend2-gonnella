export type PosterProps = {
  posterPath: string | null;
  alt: string;
  className?: string;
}

// Mostra il poster del film o il segnaposto del wireframe.
export function Poster({ posterPath, alt, className }: PosterProps) {
  if (posterPath === null) {
    return <div className={className}>Poster</div>;
  }

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={alt}
      className={className}
    />
  );
}
