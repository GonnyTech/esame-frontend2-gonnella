
export interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return <span className="genre">{label}</span>;
}
