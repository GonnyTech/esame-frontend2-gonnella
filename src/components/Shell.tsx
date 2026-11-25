import { Outlet } from 'react-router-dom';
import { Header } from './Header';

// Fornisce la struttura condivisa delle pagine.
export function Shell() {
  return (
    <div className="shell">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
