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

function Home() {
  return (
    <>
      <div className="card">
        <h2>Próximo jogo</h2>
        <p>⚽ {clube.proximoJogo.adversario}</p>
        <p>📅 {clube.proximoJogo.data}</p>
        <p>🕒 {clube.proximoJogo.horario}</p>
      </div>

      <div className="card">
        <h2>Campanha</h2>
        <p>Jogos: {clube.campanha.jogos}</p>
        <p>Vitórias: {clube.campanha.vitorias}</p>
        <p>Empates: {clube.campanha.empates}</p>
        <p>Derrotas: {clube.campanha.derrotas}</p>
      </div>
    </>
  );
}

function Jogos() {
  return <div className="card"><h2>Jogos</h2></div>;
}

function Elenco() {
  return <div className="card"><h2>Elenco</h2></div>;
}

function Stats() {
  return <div className="card"><h2>Estatísticas</h2></div>;
}

function Admin() {
  return <div className="card"><h2>Administração</h2></div>;
}
