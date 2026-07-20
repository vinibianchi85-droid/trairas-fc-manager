import Estatisticas from "./pages/Estatisticas";
import Jogos from "./pages/Jogos";
import Elenco from "./pages/Elenco";
import Home from "./pages/Home";
import jogadores from "./data/jogadores";
import { useState } from "react";
import clube from "./data/clube";

export default function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <div className="app">
      <header className="header">
        <h1>{clube.nome}</h1>
        <p>{clube.campeonato} {clube.temporada}</p>
      </header>

      <main className="content">
        {pagina === "home" && <Home />}
        {pagina === "jogos" && <Jogos />}
        {pagina === "elenco" && <Elenco />}
        {pagina === "stats" && <Stats />}
        {pagina === "admin" && <Admin />}
      </main>

      <footer className="menu">
        <button onClick={() => setPagina("home")}>🏠</button>
        <button onClick={() => setPagina("jogos")}>⚽</button>
        <button onClick={() => setPagina("elenco")}>👥</button>
        <button onClick={() => setPagina("stats")}>📊</button>
        <button onClick={() => setPagina("admin")}>⚙️</button>
      </footer>
    </div>
  );
}






  




function Admin() {
  return <div className="card"><h2>Administração</h2></div>;
}
