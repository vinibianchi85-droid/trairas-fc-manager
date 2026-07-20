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



function Jogos() {
  return <div className="card"><h2>Jogos</h2></div>;
}

function Elenco() {
  return (
    <>
      <h2>👥 Elenco</h2>

      {jogadores.map((jogador) => (
        <div className="card" key={jogador.id}>
          <h3>
            #{jogador.numero} - {jogador.nome}
          </h3>

          <p><strong>Posição:</strong> {jogador.posicao}</p>
          <p>⚽ Gols: {jogador.gols}</p>
          <p>🎯 Assistências: {jogador.assistencias}</p>
          <p>🟨 Amarelos: {jogador.amarelos}</p>
          <p>🟥 Vermelhos: {jogador.vermelhos}</p>
          <p>🏃 Jogos: {jogador.jogos}</p>
        </div>
      ))}
    </>
  );
}
  


function Stats() {
  return <div className="card"><h2>Estatísticas</h2></div>;
}

function Admin() {
  return <div className="card"><h2>Administração</h2></div>;
}
