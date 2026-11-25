# Movie App

Applicazione React e TypeScript che mostra i risultati di ricerca TMDB per
"The Lord of the Rings" e i dettagli di un film.

## Requisiti

- Node.js
- npm
- Una API key TMDB

## Avvio

1. Installa le dipendenze:

   ```sh
   npm install
   ```

2. Copia `.env.example` in `.env` e inserisci la tua API key:

   ```env
   VITE_TMDB_API_KEY=inserisci_qui_la_tua_api_key
   ```

3. Avvia l'applicazione:

   ```sh
   npm run dev
   ```

`.env` è escluso da Git; non committare la tua API key. Le variabili `VITE_`
sono incluse nel codice client e visibili nel browser.

## Rotte

- `/` — elenco dei film
- `/movies/:id` — dettaglio del film

## Altri comandi

```sh
npm run build
npm run lint
```
