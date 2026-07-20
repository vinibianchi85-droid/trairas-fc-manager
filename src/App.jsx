import Admin from "./pages/Admin";
import Campeonato from "./pages/Campeonato";
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
        {pagina === "campeonato" && <Campeonato />}
        {pagina === "admin" && <Admin />}
      </main>

      <footer className="menu">
        <button onClick={() => setPagina("home")}>
  Home
</button>

<button onClick={() => setPagina("jogos")}>
  Jogos
</button>

<button onClick={() => setPagina("elenco")}>
  Elenco
</button>

<button onClick={() => setPagina("stats")}>
  Estatísticas
</button>

<button onClick={() => setPagina("campeonato")}>
  Campeonato
</button>

<button onClick={() => setPagina("admin")}>
  Admin
</button>






  





