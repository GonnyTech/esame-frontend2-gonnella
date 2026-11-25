// Definisce le props necessarie per il segnaposto del tag.
export interface TagProps {
  label: string;
  variant?: 'meta' | 'genre';
}

export function Tag(_props: TagProps) {
  return <span />;
}
