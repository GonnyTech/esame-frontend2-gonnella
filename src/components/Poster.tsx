// Definisce le props necessarie per il segnaposto del poster.
export interface PosterProps {
  posterPath: string | null;
  alt: string;
  className?: string;
}

export function Poster(_props: PosterProps) {
  return <div />;
}
