import { Link } from 'react-router-dom';

// Mostra il nome dell'app e il link alla pagina iniziale.
export function Header() {
  return (
    <header className="header">
      <div>
        <div className="header__brand">Movie App</div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
}
